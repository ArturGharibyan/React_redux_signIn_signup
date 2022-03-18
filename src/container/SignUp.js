import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { adduser } from "../store/data/action"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const info = useSelector(res => res.reducer)
    const [user, setuser] = useState({ id: Date.now(), name: "", surname: "", email: "", password: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()


    return (
        <>
            <div className="text text-center ">
                <h1>Signup</h1>
            </div>
            <div style={{ width: "350px", background: "#82ABE1" }} className="container mt-5 mb-5 d-flex justify-content-center bg-light rounded border border-info ">
                <div>
                    <div className="col-md-16">
                        <label className="form-labels">Enter Name</label>
                        <input className="form-control" style={{ width: "300px", height: "40px" }} type="text" value={user.name} placeholder="name" name="name" onChange={(e) => setuser({ ...user, name: e.target.value })}></input><br></br>
                    </div>
                    <div className="col-md-16">
                        <label className="form-labels">Enter surname</label>
                        <input className="form-control" style={{ width: "300px", height: "40px" }} type="text" value={user.surname} placeholder="surname" name="surname" onChange={(e) => setuser({ ...user, surname: e.target.value })}></input><br></br>
                    </div>
                    <div className="col-md-16">
                        <label className="form-labels">Enter Email</label>
                        <input className="form-control" style={{ width: "300px", height: "40px" }} type="email" value={user.email} placeholder="email" name="email" onChange={(e) => setuser({ ...user, email: e.target.value })}></input><br></br>
                    </div>
                    <div className="col-md-16">
                        <label className="form-labels">Enter Password</label>
                        <input className="form-control" style={{ width: "300px", height: "40px" }} type="password" value={user.password} placeholder="password" name="password" onChange={(e) => setuser({ ...user, password: e.target.value })}></input><br></br>
                    </div>
                    <div className="d-flex flex-column text-center px-5 mt-3 mb-3">
                        <button className="btn btn-dark btn-block  " onClick={() => {
                            dispatch(adduser(user))
                            setuser({ name: "", surname: "", email: "", password: "" })
                            if (user.name == "" || user.surname == "" || user.email == "" || user.password == "") {
                                return (
                                    alert("please fill in all the fields")
                                )
                            } else {
                                navigate("/signin")
                            }
                        }}>signup</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup