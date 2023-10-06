/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const{title,image_url,details,_id}=news
    return (
        <div>
            <img src={image_url} alt="" />
            <p className="text-2xl my-5" >{title}</p>
            {
details.length>200 
?<p>{details.slice(0,200)}
<Link to={`/news/${_id}`} className="text-blue-600">   read more...</Link>
</p>
: <p>{details}</p>
            }
        </div>
    );
};

export default NewsCard;