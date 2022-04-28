import React, { useState, useEffect } from 'react';
import './style.css';

const LikeButton = () => {

    const [like, setLike] = useState(100);
    const [isLike, setIsLike] = useState(false);

    const handleLike = () => {
        setLike(like + (isLike?-1:1));
        setIsLike(!isLike);
    }

    return(
        <div>
            <button onClick={handleLike} className={"bt-like like-button " + (isLike ? "liked" : "")}>
                {/*like*/}
            </button>
        </div>
    );
};

export default LikeButton;