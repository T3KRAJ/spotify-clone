# Spotify React Clone
This app is a demo replica of Spotify (using their spotify api).
I decided to create this in order to learn React with fun. This is not meant for production use, just to have fun locally.
Shoutout to [Clever Programmer](https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ) for turning my dream into reality.

-----

## Login View

![Sreenshot](screenshot1.png)

## Main Page 

![Sreenshot](screenshot2.png)

-----

## Installation and Setup Instructions

### Example:
Before the already well known react installation process, place visit [spotify developer page](https://developer.spotify.com/) and go inside the dashboard. There you can create a new app, and you will get your clientId. Also open the app inside the dashboard and edit settings. Only thing you need to change is redirect url. It is the url your app is running at. By default localhost runs at [http://localhost:3000/](http://localhost:3000) so you can copy and paste that if you are just looking to test the app.

- Copy your clientId inside spotify.js file and also put your redirectUrl

- Now for the regular react app process you will need node and npm installed globally on your machine.

### Installation:

`npm install`

### To Start Server:

`npm run build && npm start`

### To Visit App:

`localhost:3000`

-----

### This web application is written with jsx that utilizes:

- Spotify Web API
- Material-ui/icons
- Axios for easy http requests
- BEM methodology
