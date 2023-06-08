import React from 'react';
import './VIdeoPlayer.css';

import Video from '../../Components/Video/Video';
import SideBar from '../../Components/SideBar/SideBar';

function VideoPlayer(){
    return (
        <div className='main-containers'>
            <SideBar/>
            <Video />
        </div>
    );
}

export default VideoPlayer;