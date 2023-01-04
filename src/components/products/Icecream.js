import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Icecream = () => {
    return (
        <div>
            <center>
                <h4> Welcome To Icecream Page !!</h4>
                <p> How can i help you</p>
                <Link to="/Products/Icecream/1"><li>Icecream</li></Link>
                <Link to="/Products/Icecream/2"><li>Icecream</li></Link>
                <Link to="/Products/Icecream/3"><li>Icecream</li></Link>
                <Link to="/Products/Icecream/4"><li>Icecream</li></Link>
            </center>
            <Outlet />
        </div>
    )
}

export default  Icecream;