import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-2xl font-poppins">this is Home</h2>
            <div className="grid grid-cols-4 gap-4">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 border ">
                    <h2 className="text-2xl">News coming soon</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;