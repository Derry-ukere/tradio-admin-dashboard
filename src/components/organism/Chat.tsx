import React,{useState,useEffect} from 'react';
import {BeatLoader} from 'react-spinners';
import {useDispatch, useSelector} from 'react-redux';
import {singleClientAction} from '../../actions/getOneClientAct';
import {RootState} from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chat = () => {
  const dispatch = useDispatch();
  const sendmail = useSelector( (state : RootState) => state.senndMailState);
  const {error,payload,loading} = sendmail;


  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const sendMaile = () =>{
    console.log(email,message);
    dispatch(singleClientAction.sendMail(message, email)); 

  };

  useEffect(() =>{
    if(payload){
      toast.success('message has been sent', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }); 
      setEmail('');
      setMessage('');
    }
    if(error){
      toast.error('error occured', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }); 
    }
  },[error,payload ]); 


  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="form-group col-xl-6 col-md-6">
        <label className="mr-sm-2">Email</label>
        <input type="email" className="form-control" placeholder="Enter Email"  value = {email}  onChange = {(e) => setEmail(e.target.value)}/>
      </div>
      <div className="form-group col-xl-6 col-md-6">
        <label className="mr-sm-2">Enter Message:</label>
        <textarea id="w3review" name="w3review" rows={4} cols={50} value = {message} onChange = {(e) =>setMessage(e.target.value) } />
      </div>
      <div className="form-group col-12">
        {loading ? <BeatLoader color = 'white' />  : <button className="btn btn-success px-4"  onClick = {sendMaile}>Send Email</button>}
      </div>
    </div> 
  );
};

export default Chat;
