import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import { getReplacement } from "../configuration/tooltipFromType";
const reactStringReplace = require('react-string-replace')

export const replaceWithLink = function (feed) {
    let replacedMsg ;
    const replacement =getReplacement(feed.type);
    replacement.forEach(replace => {
        const link = feed[replace.filed],
              tooltip = feed[replace.match];
        let msgToUse = replacedMsg?replacedMsg:feed.message;
        replacedMsg =reactStringReplace(msgToUse, link,(match,i)=> (<Popup trigger={(<a href={link}>{link}</a>)} content={(<span><Icon name={replace.icon} />{tooltip}</span>)} />));
    });
    return replacedMsg;
}
