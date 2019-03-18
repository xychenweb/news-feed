import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { replaceWithLink } from '../helper/replaceWithTootip';
import FeedsData from '../configuration/data';
export default class Feeds extends Component {
    render() {
        const listOfFeeds = FeedsData.items.map((feed, index) => {
            let avatar;
            if (feed.entity_type === 'video' || !feed.thumbnail) {
                avatar = <Icon circular name="user" />;
            } else {
                avatar = (
                    <img
                        src={feed.thumbnail}
                        alt=""
                        onError={this.handleImageLinkFail}
                    />
                ) || <Icon circular name="user" />;
            }
            return (
                <Feed size="large" key={index}>
                    <Feed.Event>
                        <Feed.Label>{avatar}</Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                {replaceWithLink(feed)}
                                <Feed.Date>yesterday</Feed.Date>
                            </Feed.Summary>
                            {feed.entity_type === 'video' && (
                                <Feed.Extra images>
                                    <a href={feed.thumbnail}>
                                        <img alt="" src={feed.thumbnail} />
                                    </a>
                                </Feed.Extra>
                            )}
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name="like" />4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            );
        });
        return <div>{listOfFeeds}</div>;
    }
}
