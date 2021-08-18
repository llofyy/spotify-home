import React, { useState } from 'react';
import './styles.css';

import { AiOutlineHeart, AiFillHeart  } from 'react-icons/ai';
import {MdSkipPrevious, MdSkipNext, MdRepeat, MdRepeatOne, MdPlayCircleFilled, MdPauseCircleFilled, MdShuffle, MdVolumeUp, MdVolumeOff} from 'react-icons/md';

export default function Player() {
    const [like, setLike] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [repeat, setRepeat] = useState('none' || 'all' || 'one');
    const [timer, setTimer] = useState(0);
    const [mute, setMute] = useState(false);

    function handleLiked() {
        setLike(!like);
    }

    function handleShuffle() {
        setShuffle(!shuffle);
    }

    function handlePlaying() {
        setIsPlaying(!isPlaying);
        setTimer(70);
    }

    function handleSetRepeat() {
        if(repeat === 'none') {
            setRepeat('all')
        }else if(repeat === 'all') {
            setRepeat('one')
        }else {
            setRepeat('none')
        }
    }

    function handleSetMute() {
        setMute(!mute);
    }

    return (
        <div className="player-container">
            <div className="data-song">
                <img src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg" alt="Album cover" />
                <div className="song">
                    <a href="##" className="song-title">Chanel</a>
                    <a href="##" className="song-artist">Frank Ocean</a>
                </div>
                <span onClick={handleLiked} className="heart" style={like ? { color: "#66D36E", opacity: 1 } : {}}>
                    {!like ? <AiOutlineHeart /> : <AiFillHeart />}
                </span>
            </div>

            <div className="player-control">
                <div className="control">
                    <span onClick={handleShuffle} className={`btn-control ${shuffle ? 'shuffle-on' : ''}`}><MdShuffle /></span>
                    <span className="btn-control"><MdSkipPrevious /></span>
                    <span onClick={handlePlaying} className="btn-play">{isPlaying ? <MdPauseCircleFilled /> : <MdPlayCircleFilled />}</span>
                    <span className="btn-control"><MdSkipNext /></span>
                    <span onClick={handleSetRepeat} className={`btn-control ${repeat !== 'none' ? 'repeat' : ''}`}>{repeat === 'all' || repeat === "none" ? <MdRepeat /> : repeat === 'one' ? <MdRepeatOne /> : ''}</span>
                </div>
                <div className="timer">
                    <span>0:00</span>
                    <div className="progress">
                        <div className={`progress-timer ${isPlaying ? 'running' : ''}`} style={{ width: `${timer}%` }}></div>
                    </div>
                    <span>3:20</span>
                </div>
            </div>

            <div className="volume">
                <span onClick={handleSetMute}>{!mute ? <MdVolumeUp /> : <MdVolumeOff />}</span>
                <div className="volume-progress">
                    <div className={`volume-audio ${mute ? 'volume-audio-mute' : ''}`}></div>
                </div>
            </div>
        </div>
    )
}