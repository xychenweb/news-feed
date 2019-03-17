const TYPE_REPLACEMENT_MAP = {
    'milestone-subs': [{
        filed:'title',
        match: 'cms',
        icon: 'building'
    },{
        filed:'est_subs',
        match: 'subscribers',
        icon: 'user'
    },{
        filed:'timeframe',
        match: 'estimated_subscribers_30_days',
        icon: 'calendar'
    }],
};

export const getReplacement = function (type) {
    return TYPE_REPLACEMENT_MAP[type]
}

