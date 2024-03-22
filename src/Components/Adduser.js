import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";
import { toast } from "react-toastify";

const Adduser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('staff');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userObj = {name, email, phone, role};
        console.log(userObj);
        if(userObj.name !== "" || userObj.email !== "" || userObj.phone !== "") {
            dispatch(FunctionAddUser(userObj));
            navigate('/user');
        } else{
            toast.error("All inputs are required");
            return;
        }

    } 
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7 col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h2>Add User</h2>
                            </div>
                            <div className="card-body" style={{textAlign:'left'}}>
                                <div className="row">
                                    <div className="col-lg-12 mb-2 ">
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control rounded-0" id="" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-2">
                                        <div className="form-group">
                                            <label className="form-label">Email</label>
                                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control rounded-0" id="" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-2">
                                        <div className="form-group">
                                            <label className="form-label">Phone</label>
                                            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className="form-control rounded-0" id="" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-2">
                                        <div className="form-group">
                                            <label className="form-label">Role</label>
                                            <select className="form-select" value={role} onChange={e => setRole(e.target.value)} aria-label="Large select example">
                                                <option selected>Open this select menu</option>
                                                <option value="admin">Admin</option>
                                                <option value="staff">Staff</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary me-2" type="submit">Submit</button>
                                <Link className="btn btn-danger" to={'/user'}>Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
}

export default Adduser;