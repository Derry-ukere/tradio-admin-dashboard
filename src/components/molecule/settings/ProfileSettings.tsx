import React,{useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import {BeatLoader} from 'react-spinners';
import {useDispatch, useSelector} from 'react-redux';
import {singleClientAction} from '../../../actions/getOneClientAct';
import {UpdateAccountDetails} from '../../../actions/updateAmount';
import {RootState} from '../../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProfileSettings = () => {
  const [clientAmount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const dispatchAmount = useDispatch();

  const allClients = useSelector( (state : RootState) => state.client);
  const updateAmount = useSelector( (state : RootState) => state.updateAmountState);
  const updateProfit = useSelector( (state : RootState) => state.updateProfitState);
  const warnClinet = useSelector( (state : RootState) => state.warnClientState);
  const removewarnClinet = useSelector( (state : RootState) => state.removeWarnClientState);



  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [warningState, setWarningState] = useState('Not Warned');
  const [profit, setProfit] = useState(0);


  const {error,payload} = allClients;
  const {error : warnError, payload : warnPayload,loading : warnLoading} = warnClinet;
  const {error : removewarnError, payload : removewarnPayload,loading : removewarnLoading} = removewarnClinet;
  const { error : UpdateErro, payload : updateAmountPayload} = updateAmount;
  const { error : UpdateProfitErro, payload : updateProfitPayload} = updateProfit;
  const [updateStatus, setupdateStatus] = useState('');
  const [loadingState, setloadingState] = useState(false);
  const [profitLoadingState, setProfitLoadingState] = useState(false);


  const params :{id : string} = useParams();
  const id = params.id;


  useEffect(() =>{
    dispatch(singleClientAction.main(id)); 
  },[]);

  const handleWarn = () => {
    dispatch(singleClientAction.warnClient(id)); 
  };

  const handleRemoveWarning = () => {
    dispatch(singleClientAction.removeWarnClient(id)); 
  };

  useEffect(() =>{
    if(warnPayload){
      setWarningState('warning message hass been sent');
      toast.success('warning message has been sent', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }); 
    }
    if(warnError){
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
  },[warnError,warnPayload ]); 
  
  //remove warning effects;
  useEffect(() =>{
    if(removewarnPayload){
      setWarningState('Not Warned');
      toast.success('warning removed!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }); 
    }
    if(removewarnError){
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
  },[removewarnError,removewarnPayload ]); 

  useEffect(() =>{
    if (payload){
      setAmount(payload.overview.balance);
      setProfit(payload.wallet.profit);
      setEmail(payload.email);
      setName(payload.fullname);
      if(payload.warn){
        setWarningState('warning message has been sent');
      }
    }
  },[payload,email,email,name]);


  useEffect(() =>{
    if(updateAmountPayload){
      setloadingState(false);
      setProfitLoadingState(false);
      toast.success(`${updateStatus} has been Updated`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }); 
    }
  },[ updateAmountPayload]);

  useEffect(() =>{
    if(updateProfitPayload){
      toast.success('Profit has been Updated', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  },[ updateProfitPayload]);

  useEffect(() =>{
    if(UpdateErro || error || UpdateProfitErro){
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

  const handleProfitChange = ( e : {target : {value : any}}) => {
    setProfit(e.target.value);
  };

  const updateAmountFunc = (e : any) => {
    e.preventDefault();
    dispatchAmount(UpdateAccountDetails.updateAmountFunc(id,clientAmount));
    setupdateStatus('Amount');
    setloadingState(true);
  };

  const updateProfitFunc = (e : any) => {
    e.preventDefault();
    dispatchAmount(UpdateAccountDetails.updateProfitFunc(id,profit));
    setupdateStatus('Profit ');
    setProfitLoadingState(true);

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
              <form name="myform" className="personal_validate" noValidate={true}  >
                <div className="form-row">
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Your Name</label>
                    <input type="text" className="form-control" placeholder="" value = {name} name="fullname" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Email</label>
                    <input type="email" className="form-control" placeholder="Hello@example.com" value = {email} name="email" />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Amount </label>
                    <input type="text" className="form-control"  value = {clientAmount} name="postal"  onChange = {handleChange}/>
                  </div>
                  <div className="form-group col-12">
                    {loadingState ? <BeatLoader color = 'white' />  : <button className="btn btn-success px-4"  onClick = {updateAmountFunc}>Update Amount</button>}
                  </div>


                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Warn Client </label>
                    <input type="text" className="form-control"  value = {warningState} name="postal"  onChange = {handleChange}/>
                  </div>
                  <div className="form-group col-12">
                    {warnLoading ? <BeatLoader color = 'white' />  : <button className="btn btn-success px-4"  onClick = {handleWarn}>Warn Client</button>}
                  </div>
                  <div className="form-group col-12">
                    {removewarnLoading ? <BeatLoader color = 'white' />  : <button className="btn btn-success px-4"  onClick = {handleRemoveWarning}>unwarn</button>}
                  </div>

                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Profit </label>
                    <input type="text" className="form-control" value = {profit}   name="postal"  onChange = {handleProfitChange}/>
                  </div>
                  <div className="form-group col-12">
                    {profitLoadingState ? <BeatLoader color = 'white' />  : <button className="btn btn-success px-4" onClick = {updateProfitFunc}>Update profit</button>}
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
