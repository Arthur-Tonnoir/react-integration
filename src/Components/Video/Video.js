import React from 'react';
import './Video.css';

import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { FiSave } from 'react-icons/fi';

function Video(props){
    return (
        <div className='video-container'>
            <div className='video'><iframe title='test'></iframe></div>
            <div className='description'>
                <div className='title'><h4>{props.title}</h4></div>
                <div className='buttons'>
                    <div className='left'>
                        <p className='youtube'>{props.youtubeur}</p>
                        <button className='btn abonne'>
                            <p>S'abonner</p>
                        </button>
                    </div>
                    <div className='btn-contain likedislike'>
                        <div className=''>
                            <button className='btn like'>
                                <AiFillLike/>
                                <p>{props.like}</p>
                            </button>
                        </div>
                        <div className=''>
                            <button className='btn dislike'>
                                <AiFillDislike />
                            </button>
                        </div>
                    </div>
                    <div className='btn-contain'>
                        <button className='btn partage'>
                            <RiShareForwardLine />
                            <p>Partage</p>
                        </button>
                    </div>
                    <div className='btn-contain'>
                        <button className='btn enregistrer'>
                            <FiSave/>
                            <p>Enregistrer</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;