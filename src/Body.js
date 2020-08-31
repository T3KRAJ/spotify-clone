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
    {console.log(discover_daily)}
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
                    <PLayCircleFilledIcon className="body__shuffle" />
                    <FavouriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discover_daily?.tracks.items.map((item) => 
                    <SongRow track={item.track} />
                )}

            </div>
        </div>
    );
}

export default Body;