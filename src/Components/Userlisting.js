import { connect } from "react-redux";
import { fetchUserList, removeUser, updateUser } from "../Redux/Action";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Userlisting = (props) => {
    // console.log(props)
    useEffect(() => {
        props.loaduser();
    },[]);

  const handleDelete = (code) => {
      if(window.confirm('Do you want to remove this user?')) {
          props.removeuser(code);
          setTimeout(() => {
            props.loaduser();
          }, 100);
          toast.success('User removed successfully');
      }
  }
  return (
    props.user.loading? <div><h3>...loading</h3></div> :
    props.user.errormessage? <div><h3>{props.user.errormessage}</h3></div> :

    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
              <div className="card-header">
                  <div className="d-flex justify-content-between">
                      <h2>User List</h2>
                      <Link to={'/user/add'} className="btn btn-primary">Add User [+]</Link>
                  </div>
              </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      props.user.userList && props.user.userList.map(item => 
                          <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                              <td>{item.role}</td>
                              <td>
                                  <Link className="btn btn-primary me-2" to={'/user/edit/' + item.id}>Edit</Link>
                                  <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button>
                              </td>
                          </tr>
                      )
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      loaduser: () => dispatch(fetchUserList()),
      removeuser: (param) => dispatch(removeUser(param)),
      updateuser: (user) => dispatch(updateUser(user)) 
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps) (Userlisting);
