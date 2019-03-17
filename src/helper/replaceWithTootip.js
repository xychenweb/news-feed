import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
const reactStringReplace = require('react-string-replace')


export const replaceWithLink = function (feed, replacement) {
    let replacedMsg ;
    replacement.forEach(replace => {
        const link = feed[replace.filed],
              tooltip = feed[replace.match];
        let msgToUse = replacedMsg?replacedMsg:feed.message;
        replacedMsg =reactStringReplace(msgToUse, link,(match,i)=> (<Popup trigger={(<a href={link}>{link}</a>)} content={(<span><Icon name={replace.icon} />{tooltip}</span>)} />));
    });
    return replacedMsg;
}
