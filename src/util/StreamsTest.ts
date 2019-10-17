import {assert} from 'chai';
import {Files} from "./Files";
import {FilePaths} from "./FilePaths";
import {Streams} from "./Streams";
import {Strings} from "./Strings";
import {assertJSON} from "polar-test/src/test/Assertions";

describe('StreamsTest', function() {

    it("Basic", async function() {

        let path = FilePaths.createTempName('stream-progress.txt');

        const data = Strings.generate(65536 * 3);

        await Files.writeFileAsync(path, data);

        const stat = await Files.statAsync(path);

        const stream = await Files.createReadStream(path);

        let init = {id: 'test', total: stat.size};

        const callbacks: number[] = [];

        const progressStream = await Streams.toProgressStream(stream, init, (progress) => {
            callbacks.push(progress.completed);
        });

        assertJSON(callbacks, []);

        await Streams.toBuffer(progressStream);

        assertJSON(callbacks, [
            0,
            65536,
            131072,
            196608
        ]);

    });

});
