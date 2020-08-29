export const authEndpoint =
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "e8b9dfdf186f4fe7b145ae105547d7eb";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&{scopes.join("%20")}&response_type=token&show_dialog=true`;