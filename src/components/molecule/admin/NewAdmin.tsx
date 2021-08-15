import React,{useState,useEffect} from 'react';
import {BeatLoader} from 'react-spinners';
import { useHistory} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../../../actions/register';
import {RootState} from '../../../store';

const ProfileSettings = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();
  const clientRegister = useSelector( (state : RootState) => state.register);
  const {loading,error,payload} = clientRegister;
  const history = useHistory();


  useEffect(()=>{
    if(payload){
      history.push('/add-admin');
    }
    if(error){
      alert(error);
    }
  },[dispatch,payload]);



  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name,email,password);
    dispatch(registerAction.register(name,email,password));

  };
  return (
    <div className="col-xl-12">
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Admin Information</h4>
            </div>
            <div className="card-body">
              <form  name="myform" className="personal_validate" noValidate={true} onSubmit = {handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Admin Name</label>
                    <input type="text" className="form-control" required placeholder="Enter Admin Name" name="fullname" value = {name} onChange = {(e) => setname(e.target.value)} />
                  </div>
                  
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Admin Email</label>
                    <input type="email" required className="form-control" placeholder="Enter Admin Email" name="permanentaddress"  value = {email} onChange = {(e) => setemail(e.target.value)}/>
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Admin Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" required name="city" value = {password}  onChange = {(e) => setpassword(e.target.value)} />
                  </div>
                  <div className="form-group col-12">
                    {loading ? <BeatLoader color = 'white' /> :<button type="submit" className="btn btn-success px-4">Create New Admin</button>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
