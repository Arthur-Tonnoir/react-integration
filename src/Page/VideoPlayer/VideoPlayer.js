import React from 'react';
import { useParams } from 'react-router-dom'
import './VIdeoPlayer.css';


import Video from '../../Components/Video/Video';
import SideBar from '../../Components/SideBar/SideBar';

function VideoPlayer(){
    const { title, youtubeur, like } = useParams()
    return (
        
        <div className='main-containers'>
            <SideBar/>
            <Video title={title} youtubeur={youtubeur} like={like} />
        </div>
    );
}

export default VideoPlayer;