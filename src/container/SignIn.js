import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



const Signin = () => {
    const navigate = useNavigate()
    const info = useSelector(res => res.reducer)
    const [us, setus] = useState({ email: "", password: "" })
  

    const login = () => {

        const user = info.users.find(e => e.email == us.email && e.password == us.password)
        if (user) {
            navigate('/profile/' + user.id)
        } else {
            alert(" invalid email or password ")
        }
    }

    return (
        <>
            <div className="text text-center">
                <h1>Signin</h1>
            </div>
            <div style={{width:"350px", background:"#82ABE1"}} className="container mt-5 mb-5 d-flex justify-content-center bg-light rounded border border-info ">
                <form className="requires-validation">
                    <div className="col-md-12">
                    <label className="form-labels">Enter Email</label>
                        <input className="form-control" style={{ width: "300px", height: "40px" }} type="text" placeholder="email" value={us.email} onChange={(e) => setus({ ...us, email: e.target.value })}></input><br></br>
                    </div>
                    <div className="col-md-12">
                    <label className="form-labels">Enter Password</label>
                        <input className="form-control" style={{ width: "300px", height: "40px" }} type="password" placeholder="password" value={us.password} onChange={(e) => setus({ ...us, password: e.target.value })}></input><br></br>
                    </div>
                    <div className="d-flex flex-column text-center px-5 mt-3 mb-3">
                        <button type="submit" className="btn btn-dark btn-block confirm-button " onClick={() => login()}>Signin</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signin
