import React from 'react';
import './GridVideo.css';

import youtubevideo from '../../assets/img/youtube-video.jpg'

import { Link } from 'react-router-dom';


function GridVIdeo(){
    return (
        <div className='main-tab'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Link to='/videoplayer/arthur/Teste 1/10000/code'>
                                <div className='video-contain'>
                                    <div className='video-image'>
                                        <img src={youtubevideo} alt='video'/>
                                    </div>
                                    <div className='video-title'>
                                        <p>Vidéo 1</p>
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>
                            <Link to='/videoplayer/dorian/Teste 2/3600/code2'>
                                <div className='video-contain'>
                                    <div className='video-image'>
                                        <img src={youtubevideo} alt='video'/>
                                    </div>
                                    <div className='video-title'>
                                        <p>Vidéo 2</p>
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>
                            <Link to='/videoplayer/julien/Teste 3/1200/code3'>
                                <div className='video-contain'>
                                    <div className='video-image'>
                                        <img src={youtubevideo} alt='video'/>
                                    </div>
                                    <div className='video-title'>
                                        <p>Vidéo 3</p>
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td>
                            <Link to='/videoplayer/alexandre/Teste 4/1000/code4'>
                                <div className='video-contain'>
                                    <div className='video-image'>
                                        <img src={youtubevideo} alt='video'/>
                                    </div>
                                    <div className='video-title'>
                                        <p>Vidéo 4</p>
                                    </div>
                                </div>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GridVIdeo;