const TYPE_REPLACEMENT_MAP = {
    'milestone-subs': [
        {
            filed: 'title',
            match: 'cms',
            icon: 'building'
        },
        {
            filed: 'est_subs',
            match: 'subscribers',
            icon: 'user'
        },
        {
            filed: 'timeframe',
            match: 'estimated_subscribers_30_days',
            icon: 'calendar'
        }
    ],
    'trending-video': [
        {
            filed: 'channel_title',
            match: 'cms',
            icon: 'building'
        }
    ],
    'stats-trend': [],
    'channel-overlap': [],
    'delta-subs': [
        {
            filed: 'change_type',
            match: 'subscribers_30_days',
            icon: 'arrow up'
        }
    ],
    'video-objects': [],
    'video-topics': [],
    'channel-new': []
};

export const getReplacement = function (type) {
    return TYPE_REPLACEMENT_MAP[type];
};
