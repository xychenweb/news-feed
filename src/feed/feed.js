import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react';
import { replaceWithLink } from "../helper/replaceWithTootip";



const feed = {
    entity_type: 'feed',
    category: 'feed',
    est_subs: '2.0M',
    mod_7_days: 998796,
    subscribers: 1998208,
    name: 'Studio71_managed2',
    cms: 'Studio71_managed2',
    mod_30_days: 808,
    type: 'milestone-subs',
    title: 'Sarazar',
    estimated_subscribers_30_days: 2000808,
    thumbnail:
        'https://yt3.ggpht.com/-TZYmNcx1Kic/AAAAAAAAAAI/AAAAAAAAAAA/6bGIs1dQrB4/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
    id: 'UCqwoHjwau6Js8wOq6LSmCxQ',
    entity_id: 'UCqwoHjwau6Js8wOq6LSmCxQ',
    timeframe: '30 days',
    domain: 'yt',
    estimated_subscribers_7_days: 1998796,
    message: 'Sarazar is projected to hit 2.0M subscribers in 30 days.'
};

export default class Feeds extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
      this.getFormattedMessage = this.getFormattedMessage.bind(this)
    }
    getFormattedMessage() {

    }
    render() {
        return (
            <div>
                <Feed size="large">
                    <Feed.Event>
                        <Feed.Label>
                            <img src={feed.thumbnail} alt="thumbnail"/>
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                {replaceWithLink(feed)}
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </div>
        );
    }
}
