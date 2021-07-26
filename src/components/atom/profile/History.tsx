import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
// import {BeatLoader} from 'react-spinners';
// import { useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loadingAction} from '../../../actions/getAllClientsAct';
import {RootState} from '../../../store';


const History = () => {
  const dispatch = useDispatch();
  const allClients = useSelector( (state : RootState) => state.clients);
  const {error,payload} = allClients;
  // const history = useHistory();
  

  useEffect(()=>{
    dispatch(loadingAction.main());
  },[]);

  useEffect(()=>{
    if(payload){
      // console.log('all clients--', payload);
    }
    console.log('error occured', error);
  },[dispatch, payload, error]);

  const handleClick = (id : string) =>{
    console.log('delete client of id--', id);
  };

  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">All Clients</h4>
        </div>
        <div className="card-body">
          <div className="transaction-table">
            <div className="table-responsive">
              <table className="table table-striped mb-0 table-responsive-sm">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Balance</th>
                    <th>Email</th>
                    <th>age</th>
                    <th></th>
                    <th></th>

                  </tr>
                </thead>
                <tbody>
                  
                  {payload && payload.map((client, index) =>
                    <tr key = {index}>
                      <td>#{client._id}</td>
                      <td>{client.overview.name ? client.overview.name : 'No Name'}</td>
                      <td>{client.overview.city ? client.overview.city : 'No location'}</td>
                      <td>{client.overview.balance}USD</td>
                      <td>{client.email}</td>
                      <td>{client.overview.dob ? client.overview.dob : 'No Age'}</td>   
                      <td>
                        <button className="btn btn-success waves-effect px-4" onClick = { ()=> handleClick(client._id)} style = {{ backgroundColor : 'red'}}> <a href="#"><i className="bi bi-trash" /></a></button>
                      </td>
                      <td>
                        <Link to = {`/settings/${client._id}`}><button className="btn btn-success waves-effect px-4">Edit</button></Link>
                      </td>
                    </tr>
                  )}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
