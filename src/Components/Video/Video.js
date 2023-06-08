import React from 'react';
import './Video.css';

import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { FiSave } from 'react-icons/fi';

import code from '../../assets/img/code.jpg';
import code2 from '../../assets/img/code2.png';
import code3 from '../../assets/img/code3.jpg';
import code4 from '../../assets/img/code4.png';

function Video(props){
    const element = getElement(props.video);
    return (
        <div className='video-container'>
            <div className='video'><img src={element} alt='video'/></div>
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

function getElement(element){
    if(element === "code"){
        return code;
    }
    else if(element === "code2"){
        return code2;
    }
    else if(element === "code3"){
        return code3;
    }
    else if(element === "code4"){
        return code4;
    }
    return "null";
}

export default Video;