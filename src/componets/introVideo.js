import React from "react";
import css from "./IntroVideo.module.scss";
import { IsMobile } from "../modules/utility";

import { Resources } from "../modules/prelaod";

const IntroVideo = ({ onFinish }) => {
    const isMobile = IsMobile();

    return (
        <div className={`IntroVideo cover ${css.IntroVideo}`}>
            {!isMobile ? (
                <video
                    playsInline
                    autoPlay
                    onEnded={() => onFinish && onFinish()}
                >
                    <source src={Resources.introVideo}></source>
                </video>
            ) : (
                <>
                    <audio
                        autoPlay={true}
                        onEnded={() => onFinish && onFinish()}
                    >
                        <source src={Resources.introSound}></source>
                    </audio>
                    <img src={Resources.introGif} className={css.gif} />
                </>
            )}

            <div className={`${css.layer} cover`}></div>
        </div>
    );
};
export default IntroVideo;
