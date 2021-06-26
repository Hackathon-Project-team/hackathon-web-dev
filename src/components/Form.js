import React, { useState } from "react";


export default function Form(props) {

    const [adminUsername, setAdminUsername] = useState("");
    const [adminPassword, setAdminPassword] = useState("");

    console.log(adminUsername);
    console.log(adminPassword);
    

    return (
        <div className="container d-grid text-center bg-dark text-light my-5 w-50 p-3">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Admin Username</label>
                            <input type="email" className="form-control" id="adminUsername" onChange={
                                (e) => {
                                    setAdminUsername((adminUsername) => adminUsername = e.target.value);
                                }
                            }/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="adminPassword"  onChange={
                                (e) => {
                                    setAdminPassword((adminPassword) => adminPassword = e.target.value);
                                }
                            }/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block w-100" onClick={validate}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

