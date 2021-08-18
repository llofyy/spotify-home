import React, { useState } from 'react';
import './styles.css';

import { BsPlayFill } from 'react-icons/bs'

export default function Card({ image, title, desc }) {
    const [showButton, setShowButton] = useState(false);

    function handleShowButton() {
        setShowButton(!showButton);
    }

    return (
        <div className="card" onMouseEnter={handleShowButton} onMouseLeave={handleShowButton}>
            <button style={showButton ? { visibility: "visible", opacity: 1 } : { visibility: "hidden", opacity: 0 }} className="play"><BsPlayFill /></button>
            <img src={image} alt="Cover" />
            <p className="title">{ title }</p>
            <p className="desc">{ desc }</p>
        </div>
    );
}