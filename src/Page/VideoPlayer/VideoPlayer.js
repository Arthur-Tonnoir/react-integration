import React from 'react';
import { useParams } from 'react-router-dom'
import './VIdeoPlayer.css';


import Video from '../../Components/Video/Video';
import SideBar from '../../Components/SideBar/SideBar';
import GridVideo from '../../Components/GridVIdeo/GridVideo'

function VideoPlayer(){
    const { title, youtubeur, like, video } = useParams()
    return (
        
        <div className='main-containers'>
            <SideBar/>
            <Video title={title} youtubeur={youtubeur} like={like} video={video}/>
            <GridVideo />
        </div>
    );
}

export default VideoPlayer;