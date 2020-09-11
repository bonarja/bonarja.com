import React from "react";
import css from "./uiux.module.scss";
import "./uiux.phone.scss";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import StateController from "../modules/stateController";
import wallpaperApp from "../assets/uiux.jpg";
const Uiux = () => {
    const menuPhone = StateController(false);

    const progressScrollPhone = (progress) => {
        if (progress > 0.5) {
            menuPhone.set(true);
        } else {
            menuPhone.set(false);
        }
    };

    return (
        <Controller>
            <Scene
                triggerElement=".Uiux"
                duration={"70%"}
                pin={false}
                // indicators={true}
            >
                {(progress) => {
                    return (
                        <Tween
                            from={{
                                css: {
                                    marginTop: 0,
                                },
                                ease: "Strong.easeOut",
                            }}
                            to={{
                                css: {
                                    marginTop: "20%",
                                },
                                ease: "Strong.easeOut",
                            }}
                            totalProgress={progress}
                            paused
                        >
                            <div className={`${css.Uiux} Uiux Transition`}>
                                <div className={`${css.info}`}>
                                    <h1 className={css.title}>UI / UX</h1>
                                    <p>
                                        Apasionado diseñador de interfaces y
                                        experiencias de usuario
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </p>
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
                                                                            backgroundImage: `url(${wallpaperApp})`,
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
                    );
                }}
            </Scene>
        </Controller>
    );
};
export default Uiux;
