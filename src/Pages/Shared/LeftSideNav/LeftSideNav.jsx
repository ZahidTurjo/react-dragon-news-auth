import { useEffect, useState } from "react";
import Category from "../../../components/Category/Category";


const LeftSideNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="p-4 space-y-4">
            {
                categories.map(category=><Category key={category.id}
                     category={category}></Category>)
            }
        </div>
    );
};

export default LeftSideNav;