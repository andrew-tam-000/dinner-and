export function toggleMenu() {
    return {
        type: 'TOGGLE_MENU'
    }
}

export function changeRoute(route) {
    return {
        type: 'CHANGE_ROUTE'
        , payload: { route }
    }
}
