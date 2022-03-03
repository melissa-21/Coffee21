import React from 'react';
import './Catalog.css'
import Drinks from "./Drinks";
import Desserts from "./Desserts";

const Catalog = () => {
    return (
        <div className="catalog">
            <p className="c_catalog">Catalog</p>
           <Drinks/>
            <Desserts/>

        </div>
    );
};

export default Catalog;