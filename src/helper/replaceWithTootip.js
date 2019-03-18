import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import { getReplacement } from '../configuration/tooltipFromType';
const reactStringReplace = require('react-string-replace');

/**
 * @param feed the feed object,
 * the purpose of the function will replace the part of the string
 * with highlighted with pop-up explaination, as tooltip
 * would look up the mapping from confirguration 'tooltipFromType'
 */
export const replaceWithLink = function(feed) {
    let replacedMsg;
    const replacement = getReplacement(feed.type);
    if (replacement.length > 1) {
        replacement.forEach((replace, index) => {
            const link = feed[replace.filed],
                tooltip = feed[replace.match];
            let msgToUse = replacedMsg ? replacedMsg : feed.message;
            replacedMsg = reactStringReplace(msgToUse, link, (match, i) => (
                <Popup
                    key={index}
                    trigger={<a href={link}>{link}</a>}
                    content={
                        <span>
                            <Icon name={replace.icon} />
                            {tooltip}
                        </span>
                    }
                />
            ));
        });
        return replacedMsg;
    } else {
        return feed.message;
    }
};
