/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Category = ({category}) => {
    const {name}=category
    return (
        <div>
<Link className="text-xl text-gray-400" to={`/category/${category.id}`}>{name}</Link>
            
        </div>
    );
};

export default Category;