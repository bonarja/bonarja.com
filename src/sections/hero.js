import React, { useImperativeHandle, forwardRef, useRef } from "react";
import css from "./hero.module.scss";
import LineWord from "../componets/lineword";

import HeroVid from "../assets/hero.mp4";
import Sfx from "../assets/sfx.mp3";
import StateController from "../modules/stateController";

const Hero = forwardRef((props, ref) => {
    const $line1 = useRef();
    const $line2 = useRef();
    const $line3 = useRef();
    const $video = useRef();
    const $audio = useRef();

    const ActiveIntro = StateController("");

    const playLineFx = () => {
        $audio.current.currentTime = 0;
        $audio.current.play();
    };

    useImperativeHandle(ref, () => ({
        active() {
            $line1.current.active();
            $video.current.play();
            ActiveIntro.set(css.activeIntro);
        },
    }));
    return (
        <div id="hero" className={`${css.Hero} cover center y`}>
            <div className={`${css.wallpaper} cover`}>
                <div className={`${css.layer} cover`}></div>
                <video
                    playsInline
                    loop={true}
                    ref={$video}
                    className={ActiveIntro.get}
                >
                    <source src={HeroVid}></source>
                </video>
            </div>

            <div className={`${css.content} cover`}>
                <div className={`${css.letter} cover center y`}>
                    <audio ref={$audio}>
                        <source src={Sfx}></source>
                    </audio>
                    <LineWord
                        text="Hi"
                        ref={$line1}
                        width="15"
                        finishInterval={0.2}
                        onFinish={() => $line2.current.active()}
                        textColor="white"
                        left="10"
                        lineColor="white"
                        onPlay={playLineFx}
                    ></LineWord>
                    <LineWord
                        text="i am"
                        ref={$line2}
                        width="30"
                        finishInterval={0.2}
                        onFinish={() => $line3.current.active()}
                        textColor="white"
                        left="8"
                        lineColor="#ff9c07"
                        textColor="#ff9c07"
                    ></LineWord>
                    <LineWord
                        text="kleyber"
                        ref={$line3}
                        width="55"
                        textColor="#d4826f"
                        lineColor="#d4826f"
                        size="12"
                        left="10"
                    ></LineWord>
                </div>
            </div>
        </div>
    );
});
export default Hero;
