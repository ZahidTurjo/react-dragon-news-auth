import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    
    const{loginUser}=useContext(AuthContext)
    const location=useLocation()
    const navigate =useNavigate()
    console.log(location)
    const handleLogin= e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

        // log in user
        loginUser(email,password)
        .then(()=>{
            alert('successfully logged in')
            navigate(location?.state? location.state : '/' )
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl my-8 text-center">please login</h2>
           <div className="w-1/2 mx-auto">
           <form onSubmit={handleLogin} >
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
            </form>
            <p className="text-center mt-4">Do not have an account please 

                <Link to="/register" className="text-blue-700 font-semibold">Register</Link>
            </p>
           </div>

        </div>
    );
};

export default Login;