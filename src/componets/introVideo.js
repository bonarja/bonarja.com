import React from "react";
import css from "./IntroVideo.module.scss";

import introVideo from "../assets/intro.mp4";

const IntroVideo = ({ onFinish }) => {
    return (
        <div className={`IntroVideo cover ${css.IntroVideo}`}>
            <video playsInline autoPlay onEnded={() => onFinish && onFinish()}>
                <source src={introVideo}></source>
            </video>
            <div className={`${css.layer} cover`}></div>
        </div>
    );
};
export default IntroVideo;
