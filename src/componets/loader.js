import React, { useEffect } from "react";
import css from "./loader.module.scss";
import { Preload } from "../modules/prelaod";
import Glitch from "./glitch";
import Logo from "../assets/logo3.png";
const Loader = () => {
    useEffect(() => {
        // Preload({
        //     intro:
        //         "https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4",
        // }).then((r) => {
        //     console.log(r);
        // });
    }, []);

    return (
        <div className={`${css.Loader} cover center y`}>
            <Glitch
                img={Logo}
                width={250}
                variation1={1.8}
                variation2={3}
                layers={6}
                inside={false}
                skew={false}
                opacity={0.5}
                filter={
                    "invert(20%) sepia() saturate(100000%) hue-rotate($200deg) brightness(4)"
                }
            ></Glitch>
            <div className={css.title}>CARGANDO</div>
        </div>
    );
};
export default Loader;
