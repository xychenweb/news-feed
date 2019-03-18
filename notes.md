# Sample test notes
## development process

    Since unfamiliar with the JSON data, I use __JSONPath__, to query the JSON data first, for all kinds of field to get to know the data, what can be omitted, what is common, what is primary field, etc.
    - found out all data in the __feed__ category
    - two types of entity type, __video__ and __feed__
    - not all entry has thumbnail
    - seven types of event as listed in the __toolTipFromType__
## UX design
    One of the principle that I abide by is to get rid of unnessasary info from screen for users, not only that creates less erronous event for both front-end and back-end to handle, but also it emphasis the infomation that is crucial to users.

    ```
    For example, in the `milestone-subs` type of json entry,
    the primary infomation would be __subscribers__ and __title__.
    In terms of other info like exact number for suscribers, or content management service organization, is secondary information. Meaning that most of users don't care (would back up using __Google Analytics__ in real life.) However, we still want to make the infomation availble. Therefore, designed the UX tooltip, only show when the user care simply by hoverring the info.
    The tooltip would be dynamically genereated, and each tooltip has different icon to differentiate.
    ```
## Project explanation
    - the file `tooltipFromType` is the mapping of what substring in the originall message would be transformed into a tooltip, and what the icon and info the tooltip would be.
    - for the feeds avatar, since the video type don't have a user avatar, therefore default would be utilized
    - the file `replaceWithTooltip` is the fucntion to transform the plain old message with a linked style suggesting there is more info associate with it if the user want to know furthermore. Take the message, and evaluate the field from the Maping and add the tooltip.

## To do and notes
   - The component would be class component even though there are no states and lifecycle hookd used, that's for later scale purpose
   - For limited time didn't have the chance to  add protypes to guard the types and unit testing

## Author - Nick Chen Thanks :+1: