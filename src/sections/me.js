import React from "react";
import css from "./me.module.scss";
import Glitch from "../componets/glitch";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import { Resources } from "../modules/prelaod";
const Me = () => {
    const getAge = (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <div className={`${css.Me} Me Section`}>
            <Controller>
                <Scene
                    triggerElement=".Me"
                    duration={"90%"}
                    pin={false}
                    offset={"-100%"}
                    // triggerHook={"-300%"}
                >
                    {(progress) => (
                        <Tween
                            from={{
                                css: {
                                    marginTop: 0,
                                },
                                // ease: "Strong.easeOut",
                            }}
                            to={{
                                css: {
                                    marginTop: "20%",
                                },
                                // ease: "Strong.easeOut",
                            }}
                            totalProgress={progress}
                            paused
                        >
                            <div className={`${css.info} cover Transition`}>
                                <div className={`${css.g1}`}>
                                    <div>
                                        <h1>sobre mi</h1>
                                        <p>
                                            Profesionalmente conectado con la
                                            industria del desarrollo web y la
                                            tecnología durante muchos años.
                                        </p>
                                        <p>
                                            Organizado, solucionador de
                                            problemas con gran atención a los
                                            detalles. Fanático de javascript, la
                                            fotografía y la producción
                                            audiovisual.
                                        </p>
                                        <p>
                                            Interesado en todo el espectro del
                                            frontend y trabajar en proyectos
                                            ambiciosos con gente positiva.
                                        </p>
                                    </div>
                                </div>
                                <div className={`${css.g2} center`}>
                                    <Controller>
                                        <Scene
                                            triggerElement="#IllustrationMe"
                                            duration={"90%"}
                                            pin={false}
                                            // indicators={true}
                                            triggerHook={0.8}
                                        >
                                            {(prog) => (
                                                <Tween
                                                    from={{
                                                        css: {
                                                            opacity: 0,
                                                            transform:
                                                                "scale(0.5) rotate3d(9, 64, -5, -36deg)",
                                                        },
                                                        // ease: "Strong.easeOut",
                                                    }}
                                                    to={{
                                                        css: {
                                                            opacity: 1,
                                                            transform:
                                                                "scale(1) rotate3d(0, 0, 0, 0)",
                                                        },
                                                        // ease: "Strong.easeOut",
                                                    }}
                                                    totalProgress={prog}
                                                    paused
                                                >
                                                    <div
                                                        id="IllustrationMe"
                                                        className="Transition"
                                                    >
                                                        <Glitch
                                                            img={
                                                                Resources.illustration
                                                            }
                                                            layers={10}
                                                            variation1={1.8}
                                                            variation2={3}
                                                            skew={false}
                                                            width={"100%"}
                                                            inside={true}
                                                            interval={4000}
                                                            opacity={0.4}
                                                            filter={
                                                                "invert(100%) sepia() saturate(100%) hue-rotate($200deg) brightness(1)"
                                                            }
                                                        ></Glitch>
                                                    </div>
                                                </Tween>
                                            )}
                                        </Scene>
                                    </Controller>
                                </div>
                            </div>
                        </Tween>
                    )}
                </Scene>
            </Controller>
        </div>
    );
};
export default Me;
