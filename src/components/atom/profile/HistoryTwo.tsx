import React,{useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadingAction} from '../../../actions/getAllClientsAct';
import {RootState} from '../../../store';
import {Link} from 'react-router-dom';


const History = () => {
  const dispatch = useDispatch();
  const allClients = useSelector( (state : RootState) => state.allAdmins);
  const [AllAdmin, setAllAdmin] = useState<any>([]);
  const {error,payload} = allClients;

  useEffect(() =>{
    if(payload){
      setAllAdmin(payload);
    }
  },[payload,error ]);

  useEffect(() =>{
    dispatch(loadingAction.getAllAdmin());
  },[ ]);

  return (
    <div className="col-xl-12">
      <Link to = '/new-admin'><button className="btn btn-success waves-effect px-4" style = {{margin:'20px'}}>Add New Admin User</button></Link>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">All Admin Users</h4>
        </div>
        <div className="card-body">
          <div className="transaction-table">
            <div className="table-responsive">
              <table className="table table-striped mb-0 table-responsive-sm">
                <thead>
                  <tr>
                    <th>Admin Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>

                  </tr>
                </thead>
                <tbody>
                  {
                    AllAdmin.map((admin : any, index : number) =>(
                      <tr key = {index}>
                        <td>{admin._id}</td>
                        <td>{admin.name}</td>
                        <td>{admin.email}</td>
                        <td>
                          <button className="btn btn-success waves-effect px-4" style = {{ backgroundColor : 'red'}}> <a href="#"><i className="bi bi-trash" /></a></button>
                        </td>
        
                      </tr>

                    ))
                  }
                 
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
