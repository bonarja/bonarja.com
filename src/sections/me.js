import React from "react";
import css from "./me.module.scss";
import Picture from "../assets/me.jpg";
import Glitch from "../componets/glitch";
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
        <div className={`${css.Me} Me`}>
            <div className={`${css.group}`}>
                <div className={`${css.picture}`}>
                    <Glitch
                        img={Picture}
                        layers={10}
                        variation1={1.8}
                        variation2={3}
                        skew={false}
                        width={500}
                        inside={true}
                        interval={4000}
                    ></Glitch>
                </div>
                <div className={`${css.info} center`}>
                    <div>
                        <div className={`${css.name}`}>
                            <p>
                                <span>Hola</span> soy
                            </p>
                            <p>Kleyber</p>
                            <p className={css.point}>Rojas</p>
                        </div>
                        <p className={css.ing}>
                            INGENIERO EN SISTEMAS <br /> <span> & </span>
                            FULLSTACK <br /> DEVELOPER
                        </p>
                        {/* <p>
                    Tengo {getAge("1994/10/8")} años, soy
                    <span> fullstack developer</span>
                </p> */}
                    </div>
                </div>
            </div>

            <div className={`${css.details}`}>
                {/* Tengo {getAge("1994/10/8")} años */}
                <label>{"<script>"}</label>
                <br />
                <p style={{ paddingLeft: 40, margin: "10px 0" }}>
                    Poseo mas de 6 años de experiencia en programación y
                    desarrollo web con mayor enfoque a{" "}
                    <span>
                        {"<span>"}
                        <p>JavaScript</p>
                        {"</span>"}
                    </span>
                    , me apasiona el diseño de interfaces, la animación,
                    aprender y crear cosas nuevas.
                </p>
                <label>{"</script>"}</label>
            </div>
        </div>
    );
};
export default Me;
