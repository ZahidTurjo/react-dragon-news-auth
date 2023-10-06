import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser}=useContext(AuthContext)

   
    const handleRegister= e=>{
        e.preventDefault();
        // const email=e.target.email.value;
        // const password=e.target.password.value;
        // console.log(email,password)
        const form= new FormData(e.currentTarget)
      const email=form.get('email')
      const name=form.get('name')
      const password= form.get('password')
    console.log(email,password,name);

    // create user
   createUser(email,password)
   .then(result =>{
    console.log(result.user)
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
       <form onSubmit={handleRegister} >
       <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="text" placeholder="name" name="name" className="input input-bordered" required />
    </div>
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
        <p className="text-center mt-4">already have an account .Go to 

             <Link to="/login" className="text-blue-700 font-semibold underline">   Login</Link>
        </p>
       </div>

    </div>
    );
};

export default Register;