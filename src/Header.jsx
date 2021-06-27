import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import './Header.scss';

const Header = () => {
    return (
        <>
            <h1> RESTy </h1>

            <Link to="/">Home</Link>


            <Link to="/help"> Help</Link>


            <Link to="/history">History</Link>

        </>



    )
}

export default Header;