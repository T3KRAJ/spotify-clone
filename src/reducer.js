import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
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
        
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
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
