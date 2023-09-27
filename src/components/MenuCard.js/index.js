import React from "react";
import "./menu-card.css";

const MenuCard = ({ title, description, imageUrl, price, currency,category='', rtl=false }) => {
    return (
        <div className={`menu-card  ${rtl? 'rtl':''}`}>
            <div className="card-menu-category">{category}</div>
            <div className='card-title-price'>
                <h6 className="menu-card-title">{title}</h6>
                <span className="menu-card-price">
                    {currency} {price}
                </span>
            </div>
            <img src={imageUrl} alt={title} className="menu-card-image" />
        </div>
    );
};

export default MenuCard;
