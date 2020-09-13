import React from "react";
import css from "./menu.module.scss";
import Glitch from "./glitch";
import { Resources } from "../modules/prelaod";
const Menu = ({ toggleMenu }) => {
    const menuList = [{ name: "bonarja" }, { name: "en construcción" }];

    const itemClick = (item) => {
        toggleMenu();
    };

    return (
        <div className={`${css.Menu} Menu`}>
            <div className="cover relative">
                <div className={`${css.textBackground} TextBackground`}>
                    <p>el diseño</p>
                    <p>no es sólo</p>
                    <p>como se ve</p>
                    <p>sino</p>
                    <p>también</p>
                    <p>como</p>
                    <p>funciona</p>
                </div>
                <div className={`${css.content} cover`}>
                    <div className={"cover center"}>
                        <Glitch
                            img={Resources.logoOrange}
                            width={150}
                            variation1={1.8}
                            variation2={3}
                            layers={6}
                            inside={false}
                            skew={false}
                            opacity={0.5}
                            // filter={
                            //     "invert(20%) sepia() saturate(100000%) hue-rotate($200deg) brightness(4)"
                            // }
                        ></Glitch>
                    </div>
                    <div className={`${css.menuList} center y`}>
                        {menuList.map((x, i) => (
                            <div
                                key={i}
                                className={`${css.item} menuItem`}
                                onClick={() => itemClick(x)}
                            >
                                <p className={css.base}>{x.name}</p>
                                <p className={css.p1}>{x.name}</p>
                                <p className={css.p2}>{x.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className={`${css.footer}`}>
                        <label className={`${css.url}`}>www.bonarja.com</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Menu;
