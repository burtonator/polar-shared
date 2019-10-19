// import * as readline from 'readline';
import {Progress, ProgressListener, ProgressTracker, ProgressTrackerInit} from "./ProgressTracker";
import {PassThrough, Duplex} from "stream";

export class Streams {

    public static isValidStream(stream: NodeJS.ReadableStream): boolean {

        if (! stream) {
            return false;
        }

        if (! stream.read()) {

        }

        return !(!stream || !stream.readable);
    }

    public static toArray(stream: NodeJS.ReadableStream): Promise<ReadonlyArray<Uint8Array>> {

        return new Promise((resolve, reject) => {

            if (! stream) {
                reject(new Error("No stream given"));
            }

            if (! stream.readable) {
                reject(new Error("Stream not readable"));
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
    //
    // /**
    //  * Listen to a stream of lines
    //  *
    //  * @param input The stream to read and split into lines.
    //  * @param handler The callback for each line.
    //  * @param completion Called when the stream is finished.  The err param
    //  *                   is given when it failed.
    //  */
    // public static toLines(input: NodeJS.ReadableStream,
    //                       handler: (line: string) => void,
    //                       completion: (err?: Error) => void) {
    //
    //     const readInterface = readline.createInterface({input});
    //
    //     readInterface.on('line', line => {
    //         handler(line);
    //     });
    //
    //     let err: Error | undefined;
    //
    //     input.once('error', (error: Error) => {
    //         completion(err = error);
    //     });
    //
    //     readInterface.on('close', () => {
    //
    //         if (! err) {
    //             // signal that we've completed but only when we haven't had an error.
    //             completion();
    //         }
    //
    //     });
    //
    // }

    /**
     *
     * @param stream The stream we're reading from.
     * @param init The metadata on the progress tracker to use.
     * @param listener The listener to receive callbacks.
     */
    public static toProgressStream(stream: NodeJS.ReadableStream,
                                   init: ProgressTrackerInit,
                                   listener: ProgressListener) {

        // https://github.com/freeall/progress-stream/blob/master/index.js

        const progressTracker = new ProgressTracker(init);

        const resultStream = new PassThrough();
        const listenerStream = new PassThrough();

        resultStream.once('resume', () => {

            // this always needs to be called but we might want to only start calling it on resume this is
            // when the user of the stream has signified that they're actually using it which might be
            // at any random time.
            listener(progressTracker.peek());

            // once the FIRST resume is called, start pipe data through. First to our listener stream and then
            // to our result stream.
            listenerStream.pipe(resultStream);
            stream.pipe(listenerStream);

        });

        let progress: Progress | undefined;

        // https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/
        //
        // In the flowing mode, data can actually be lost if no consumers are available to handle it. This is why, when
        // we have a readable stream in flowing mode, we need a data event handler. In fact, just adding a data event
        // handler switches a paused stream into flowing mode and removing the data event handler switches the stream
        // back to paused mode.

        listenerStream.on('data', (chunk: Uint8Array) => {
            // we have data now call the progress trackerlistener
            progress = progressTracker.incr(chunk.length);
            listener(progress);
        });

        listenerStream.on('end', () => {
            // issue one final event when we're done.

            if (! progress || progress.completed < progress.total) {
                // make sure we always get at least one event
                listener(progressTracker.terminate());
            }

        });

        return resultStream;

    }

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




