import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex justify-center' >
        <div className='text-center'>
        <img src={logo} alt="" />
           <h2 className='text-xl'>Journalism Without Fear or Favour</h2>
           <p className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        </div>
    );
};

export default Header;