import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return <div className= 'Header'>
        <NavLink to="/ryadom" activeClassName= 'activeRyadom'>
            <div className= 'Ryadom'>Рядом</div>
        </NavLink>

        <NavLink to="/logika" activeClassName= 'activeLogika'>
            <div className= 'Logika'>Логика</div>
        </NavLink>
    </div>
}

export default Header;