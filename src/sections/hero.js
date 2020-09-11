import React, { useImperativeHandle, forwardRef, useRef } from "react";
import css from "./hero.module.scss";
import LineWord from "../componets/lineword";

import HeroVid from "../assets/hero3.mp4";
import Sfx from "../assets/sfx.mp3";
import StateController from "../modules/stateController";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";

const Hero = forwardRef((props, ref) => {
    const $line1 = useRef();
    const $line2 = useRef();
    const $line3 = useRef();
    const $line4 = useRef();
    const $video = useRef();
    const $audio = useRef();
    const $letter = useRef();

    const ActiveIntro = StateController("");

    const playLineFx = () => {
        $audio.current.currentTime = 0;
        $audio.current.play();
    };

    const moveLetter = (progress) => {
        if (!$letter.current) return;
        // console.log($letter.current);
        $letter.current.style.marginTop = `-${300 * progress}px`;
        // $letter.current.style.marginLeft = `-${300 * progress}px`;
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
            <Controller>
                <Scene
                    triggerElement="#hero"
                    duration={"90%"}
                    pin={false}
                    // indicators={true}
                    offset={"100%"}
                    triggerHook={0}
                >
                    {(progress) => (
                        <Tween
                            from={{
                                css: {
                                    top: 0,
                                },
                                ease: "Strong.easeOut",
                            }}
                            to={{
                                css: {
                                    top: "3%",
                                },
                                ease: "Strong.easeOut",
                            }}
                            totalProgress={progress}
                            paused
                        >
                            <div className={`${css.wallpaper} cover wallpaper`}>
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
                        </Tween>
                    )}
                </Scene>
                <Scene
                    triggerElement="#hero"
                    duration={"40%"}
                    pin={false}
                    // indicators={true}
                    offset={"90%"}
                    triggerHook={0}
                >
                    {(progress) => {
                        moveLetter(progress);
                        return <></>;
                    }}
                </Scene>
                <div id="HeroContent" className={`${css.content} cover`}>
                    <div
                        className={`${css.letter} cover center y`}
                        ref={$letter}
                    >
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
                            size="12"
                            onPlay={playLineFx}
                        ></LineWord>
                        <LineWord
                            text="i'm kleyber"
                            ref={$line2}
                            width="70"
                            finishInterval={0.2}
                            onFinish={() => $line3.current.active()}
                            left={0}
                            lineColor="#ff9c07"
                            textColor="#ff9c07"
                        ></LineWord>
                        <LineWord
                            text="fullstack"
                            ref={$line3}
                            width="80"
                            textColor="#d4826f"
                            lineColor="#d4826f"
                            size="12"
                            left={2}
                            finishInterval={0.2}
                            onFinish={() => $line4.current.active()}
                        ></LineWord>
                        <LineWord
                            text="developer"
                            ref={$line4}
                            width={55}
                            textColor="#949AB3"
                            lineColor="#949AB3"
                            size="6"
                            left="10"
                        ></LineWord>
                    </div>
                </div>
            </Controller>
        </div>
    );
});
export default Hero;
