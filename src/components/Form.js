import React from "react";


export default function Form(props) {
    let admin = {
    position: "absolute" , 
    top: "50%" , 
    left: "50%" , 
    margin: "10px" , 
    padding: "40px" , 
    transform: "translate(-50% , -50%)"
    }
    return (
        <div className = "container text-center bg-dark text-light" style = {admin}>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Admin Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

