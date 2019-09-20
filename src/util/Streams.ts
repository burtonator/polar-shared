
export class Streams {

    public static isValidStream(stream: NodeJS.ReadableStream): boolean {
        return !(!stream || !stream.readable);
    }

    public static toArray(stream: NodeJS.ReadableStream): Promise<ReadonlyArray<Uint8Array>> {

        return new Promise((resolve, reject) => {

            if (! this.isValidStream(stream)) {
                reject(new Error('Either Stream Ended or not valid Stream'));
            }

            const array: Uint8Array[] = [];

            stream.on('data', (chunk: Uint8Array) => {
                array.push(chunk);
            });

            stream.on('end', () => {
                resolve(array);
            });

            stream.on('error', reject);

            stream.on('close', () => {
                resolve(array);
            });

        });

    };

    public static toBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {

        return this.toArray(stream)
            .then((array: any) => {
                return Buffer.concat(array);
            });

    };

}

/**
 * Create streams from a given range for functions that only need smaller amounts of data.
 *
 * @param start Where to start reading (inclusive)
 * @param end Where to end reading (inclusive)
 */
export type StreamRangeFactory = (start: number, end: number) => NodeJS.ReadableStream;

