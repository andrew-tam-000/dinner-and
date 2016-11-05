const initialState = {
    showMenu: false
    , topics: [
        'Dancing'
        , 'Karaoke'
        , 'Stand-up'
        , 'Comedy'
        , 'Friends'
    ]
    , route: 'home'// about,pictures
};

export default function(state = initialState, action) {

    const payload = action.payload;

    switch ( action.type ) {
        case 'TOGGLE_MENU':
            return Object.assign({}, state, { showMenu: !state.showMenu});
        case 'CHANGE_ROUTE':
            return Object.assign({}, state, { showMenu: false, route: action.payload.route});
        default:
            return state;
    }
}
