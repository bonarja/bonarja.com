import React from "react";
import css from "./me.module.scss";
import Picture from "../assets/me.jpg";
import Glitch from "../componets/glitch";
const Me = () => {
    return (
        <div className={`${css.Me}`}>
            {/* <div className={`${css.picture}`}> */}
            <Glitch
                img={"https://wallpapershome.com/images/pages/pic_h/241.jpg"}
                layers={10}
                variation1={1.8}
                variation2={3}
                skew={false}
                width={"100%"}
            ></Glitch>
            {/* </div> */}
        </div>
    );
};
export default Me;
