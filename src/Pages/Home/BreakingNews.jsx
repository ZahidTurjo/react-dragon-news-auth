
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className="bg-black text-white" pauseOnHover speed={100} >
            <Link>
 I can be a React component, multiple React components,
   or just some text <span className="tex-2xl text-red-800">********</span>
 </Link>
 <Link>
 I can be a React component, multiple React components,
   or just some text...........<span className="tex-2xl text-red-800">********</span>
 </Link>
 <Link>
 I can be a React component, multiple React components,
   or just some text......<span className="tex-2xl text-red-800">********</span>
 </Link>


 

  <span className="text-red-600">***</span>
</Marquee>
        </div>
    );
};

export default BreakingNews;