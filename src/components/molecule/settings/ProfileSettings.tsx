import React,{useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import {BeatLoader} from 'react-spinners';
import {useDispatch, useSelector} from 'react-redux';
import {loadingAction} from '../../../actions/getOneClientAct';
import {updatAmountAct} from '../../../actions/updateAmount';
import {RootState} from '../../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {client} from '../../../interfaces/getOneClient';

const ProfileSettings = () => {
  const [clientAmount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const dispatchAmount = useDispatch();

  const allClients = useSelector( (state : RootState) => state.client);
  const updateAmount = useSelector( (state : RootState) => state.updateAmountState);
  // const [myloading, setMyloading] = useState(false);

  const {error,payload} = allClients;
  const { loading, error : UpdateErro, payload : updateAmountPayload} = updateAmount;

  const params :{id : string} = useParams();
  const id = params.id;


  useEffect(() =>{
    dispatch(loadingAction.main(id));
    if(payload){
      // setClientDetail(payload);
      console.log('payload of client is --', payload);
    }
    console.log('error', error);
  },[]);

  useEffect(() =>{
    if(updateAmountPayload){
      toast.success('Amount has been Updated', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log('error', error);
  },[ updateAmountPayload]);

  useEffect(() =>{
    if(UpdateErro){
      toast.error('Something went Wrong', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  },[dispatch, UpdateErro ]);
 
  const handleChange = ( e : {target : {value : any}}) =>{
    setAmount(e.target.value);
  };

  const handleSubmit = (e : {preventDefault : () => void}) => {
    e.preventDefault();
    dispatchAmount(updatAmountAct.main(id,clientAmount));
  };

  return (
    <div className="col-xl-12">
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
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Personal Information</h4>
            </div>
            <div className="card-body">
              <form method="post" name="myform" className="personal_validate" noValidate={true} onSubmit = {handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Your Name</label>
                    <input type="text" className="form-control" placeholder="Saiful Islam" value = {payload && payload.overview.name} name="fullname" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Email</label>
                    <input type="email" className="form-control" placeholder="Hello@example.com" value = {payload && payload.email} name="email" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Date of birth</label>
                    <input type="text" className="form-control hasDatepicker" placeholder="10-10-2020" id="datepicker" value = {payload && payload.overview.dob} autoComplete="off" name="dob" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Present Address</label>
                    <input type="text" className="form-control" placeholder="56, Old Street, Brooklyn" name="presentaddress" value = {payload && payload.overview.address} />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Permanent Address</label>
                    <input type="text" className="form-control" placeholder="123, Central Square, Brooklyn" name="permanentaddress" value = {payload && payload.overview.PermAddress} />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">City</label>
                    <input type="text" className="form-control" placeholder="New York" name="city" value = {payload && payload.overview.city} />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Amount </label>
                    <input type="text" className="form-control"   name="postal"  onChange = {handleChange}/>
                  </div>
                  <div className="form-group col-12">
                    {loading ? <BeatLoader color = 'white' />  : <button className="btn btn-success px-4" type = "submit">Update Amount</button>}
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
