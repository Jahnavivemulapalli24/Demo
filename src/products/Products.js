import React from "react";
import { Outlet} from 'react-router-dom';

import {Link} from "react-router-dom";


 const Products = () => {
    return (
        <div>
            <Link to="/products/chocolate"><li>Chocolate</li></Link>
            <Link to="/products/icecream"><li>Icecream</li></Link>
 <Outlet />

        </div>
    )
}

export default Products;