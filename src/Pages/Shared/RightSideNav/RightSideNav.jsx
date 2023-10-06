import { FaGoogle, FaGithub } from 'react-icons/fa';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"



const RightSideNav = () => {
    return (
        <div>
            <div className='p-3 mb-6'>
                <h2>log In with</h2>
                <button className="btn btn-outline text-blue-400 w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn mt-4 btn-outline w-full">
                    <FaGithub></FaGithub>

                    GitHub
                </button>

            </div>
            {/* find us on */}
            <div className='p-3 mb-6'>
                <h2 className='text-2xl font-medium'>Find us on</h2>
                <button className="btn btn-outline text-blue-400 w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn mt-4 btn-outline w-full">
                    <FaGithub></FaGithub>

                    GitHub
                </button>

            </div>
            {/* q-zone */}
            <div className='p-3 mb-6 bg-gray-300 '>
                <h2 className='text-2xl font-semibold mb-3'>Q - zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
           

            </div>

        </div>
    );
};

export default RightSideNav;