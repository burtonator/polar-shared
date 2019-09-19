
import md5 from 'blueimp-md5';

/**
 * Specific hashcode algorithms
 */
export class HashcodeAlgorithms {

    public static md5(data: string) {
        return md5(data);
    }

}
