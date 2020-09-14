import React from "react";
import css from "./uiux.module.scss";
import "./uiux.phone.scss";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import StateController from "../modules/stateController";
// import wallpaperApp from "../assets/uiux.jpg";
import { Resources } from "../modules/prelaod";
const Uiux = () => {
    const menuPhone = StateController(false);

    return (
        <Controller>
            <Scene
                triggerElement="#uiuxPoint"
                duration={"60%"}
                // offset={}
                pin={false}
                triggerHook={0.8}
                // indicators={true}
            >
                {(progress) => {
                    return (
                        <div className={`${css.Uiux} Uiux  Section`}>
                            <Tween
                                // from={{
                                //     css: {
                                //         marginTop: 0,
                                //     },
                                //     // ease: "Strong.easeIn",
                                // }}
                                // to={{
                                //     css: {
                                //         marginTop: "40%",
                                //     },
                                //     // ease: "Strong.easeIn",
                                // }}
                                totalProgress={progress}
                                paused
                            >
                                <div
                                    className={`${css.wrapUiux} cover Transition`}
                                >
                                    <div className={`${css.info}`}>
                                        <h1 className={css.title}>UI / UX</h1>
                                        <p>
                                            Apasionado diseñador de interfaces y
                                            experiencias de usuario con gran
                                            destreza dándole vida a diseños e
                                            ideas.
                                        </p>
                                        <p>
                                            Completa maestría en la maquetación,
                                            desarrollo web y amplia devoción por
                                            el diseño impecable y de agrado al
                                            usuario.
                                        </p>
                                        <div id="uiuxPoint"></div>
                                    </div>

                                    <div className={`${css.interface} center`}>
                                        <Tween
                                            totalProgress={progress}
                                            paused
                                            from={{
                                                css: {
                                                    transform: `rotate3d(4, 148, -85, -55deg) scale(0.5)`,
                                                    opacity: 0,
                                                },
                                            }}
                                            to={{
                                                css: {
                                                    transform: `rotate3d(0, 0, 0, 0) scale(1)`,
                                                    opacity: 1,
                                                },
                                            }}
                                        >
                                            <div className={`${css.phone}`}>
                                                <div id="app">
                                                    <div id="menu_btn">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div id="menu">
                                                        <p> UI </p>
                                                        <p> UX </p>
                                                        <p> Coffe </p>
                                                        <p> Bonarja </p>
                                                    </div>
                                                    <Tween
                                                        totalProgress={progress}
                                                        paused
                                                        from={{
                                                            css: {
                                                                left: 0,
                                                            },
                                                        }}
                                                        to={{
                                                            css: {
                                                                left: "160px",
                                                            },
                                                        }}
                                                    >
                                                        <div
                                                            id="content"
                                                            className="cover"
                                                        >
                                                            <div id="header"></div>
                                                            <p> UI/UX </p>
                                                            <Tween
                                                                totalProgress={
                                                                    progress
                                                                }
                                                                paused
                                                                from={{
                                                                    css: {
                                                                        transform: `translate3d(-46px, 12px, 13px)`,
                                                                        boxShadow: `15px 15px 22px 1px rgba(0,0,0,0.57)`,
                                                                    },
                                                                }}
                                                                to={{
                                                                    css: {
                                                                        transform: `translate3d(0, 0, 0) perspective(0)`,
                                                                        boxShadow: `0px 9px 22px 1px rgba(0,0,0,0.57)`,
                                                                    },
                                                                }}
                                                            >
                                                                {/* <img src="https://colaborativo.net/wp-content/uploads/2018/11/mikaelgustafsson_mklgustafsson.gif" /> */}
                                                                <div className="image">
                                                                    <Tween
                                                                        totalProgress={
                                                                            progress
                                                                        }
                                                                        paused
                                                                        from={{
                                                                            css: {
                                                                                transform: `scale(1.4)`,
                                                                            },
                                                                        }}
                                                                        to={{
                                                                            css: {
                                                                                transform: `scale(1)`,
                                                                            },
                                                                        }}
                                                                    >
                                                                        <div
                                                                            className="cover Transition"
                                                                            style={{
                                                                                backgroundImage: `url(${Resources.wallpaperApp})`,
                                                                            }}
                                                                        ></div>
                                                                    </Tween>
                                                                </div>
                                                            </Tween>
                                                        </div>
                                                    </Tween>
                                                </div>
                                            </div>
                                        </Tween>
                                    </div>
                                </div>
                            </Tween>
                        </div>
                    );
                }}
            </Scene>
        </Controller>
    );
};
export default Uiux;
