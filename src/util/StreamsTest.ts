import {assert} from 'chai';
import {Files} from "./Files";
import {FilePaths} from "./FilePaths";
import {Streams} from "./Streams";

describe('StreamsTest', function() {

    it("Basic", async function() {

        let path = FilePaths.createTempName('stream-progress.txt');
        await Files.writeFileAsync(path, 'xxxxxxxxxxxxxxxxxxxxxxxx');

        const stat = await Files.statAsync(path);

        const stream = await Files.createReadStream(path);

        let init = {id: 'test', total: stat.size};
        Streams.toProgressStream(stream, init, (progress) => console.log(progress));;

    });

});
