import {HTMLStr, PlainTextStr} from "../util/Strings";
import sanitizeHtml from 'sanitize-html';

export class TextSerializer {

    public static serialize(html: HTMLStr): PlainTextStr {

        return sanitizeHtml(html, {

            // TODO: add all of these below.. to allowedAttributes.
            allowedTags: [ ],

            allowedAttributes: {

            },
            allowedStyles: {
                '*': {

                },

            }

        });

    }

}
