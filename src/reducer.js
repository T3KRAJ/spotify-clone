export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQB3L0JXKh17jdOTBe0UIiEJ0rXvPLReNLvj63hyDmJdhCBRvCeRlZ2lrPbngVKEOBhIEllSKoZ3UXyaG2SORyiIiHGOlcMislG2w91XKR5KX1FM1EL49cbhhm9G8QW7WuP0gcRGEcf6UCnS6dzzh6eV0FDNHDc",
}

const reducer = (state, action) => {
    
    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            };
        case "SET_DISCOVER_DAILY":
            return{
                ...state,
                discover_daily: action.discover_daily,
            };
        default:
            return state;
    }
}

export default reducer;