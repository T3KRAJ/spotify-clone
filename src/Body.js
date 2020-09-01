import React from 'react';
import "./Body.css";
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PLayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";


function Body({spotify}) {
    const [{ discover_daily }, dispatch] = useDataLayerValue()
    
    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZF1E36l722Tu1ki6`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };


    return(
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_daily?.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>Daily Mix 1</h2>
                    <p>{discover_daily?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PLayCircleFilledIcon className="body__shuffle" onClick={playPlaylist}/>
                    <FavouriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discover_daily?.tracks.items.map((item) => 
                    <SongRow playSong={playSong} track={item.track} />
                )}

            </div>
        </div>
    );
}

export default Body;