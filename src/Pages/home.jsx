import React from "react";
import { Items } from "../items";
import { Itemcard } from "../components/itemcard";
import "./home.css";

export const Home = () => {
    return (
        <div className="main">
            <div className="items">{Items.map((item) => (
                <Itemcard data={item} />
            ))}</div>
        </div>
    );
};