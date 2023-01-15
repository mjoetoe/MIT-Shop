import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <>
            <nav className="c-nav">
                <a className="c-nav__btn" href="#top">Menu</a>
                <h1 className="c-logo">MIT Shop</h1>
                <div>
                    <a className="c-nav__icon" href="#"><FontAwesomeIcon icon={faSearch} /></a>
                    <a className="c-nav__icon" href="#"><FontAwesomeIcon icon={faShoppingBag} /></a>
                </div>
            </nav>
            <div className="c-topbar">
                <a className="c-topbar__link" href="#">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Verder shoppen</span>
                </a>
            </div>
        </>
    );
}

export default Header;
