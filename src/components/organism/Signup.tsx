/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import {BeatLoader} from 'react-spinners';
import { useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../../actions/register';
import {RootState} from '../../store';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();
  const clientRegister = useSelector( (state : RootState) => state.register);
  const {loading,error,payload} = clientRegister;
  const history = useHistory();
 

  const handleSubmit = (e : {preventDefault : ()=> void}) =>{
    e.preventDefault();
    dispatch(registerAction.register(username,email,password));
  };

  useEffect(()=>{
    if(payload){
      history.push('/dashboard');
    }
    console.log('error',error);
  },[dispatch,payload]);

  return (
    <div id="main-wrapper" className="show">
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-5">
                <a href="https://amazing-borg-54732d.netlify.app/"><img src='./logo.png' alt="logo here" /></a>
              </div>
              <div className="auth-form card">
                <div className="card-header justify-content-center">
                  <h4 className="card-title">Sign up your account</h4>
                </div>
                <div className="card-body">
                  <form   className="signup_validate" onSubmit = {handleSubmit}>
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" placeholder="username" value = {username} onChange = {(e) => setUsername( e.target.value) }/>
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="hello@example.com" value = {email}  onChange = {(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Password" value = {password}  onChange = {(e) => setpassword(e.target.value)}/>
                    </div>
                    <div className="text-center mt-4">
                      {loading ? <BeatLoader color = 'white' /> :<button type="submit" className="btn btn-success btn-block">Sign up</button>}
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>Already have an account? <Link className="text-primary" to="/">Sign in</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Signup;
