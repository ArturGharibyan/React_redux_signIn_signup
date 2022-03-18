import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignIn from "../container/SignIn"
import SignUp from "../container/SignUp"

const Myrouter = ()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
            </BrowserRouter>
       
        </div>
    )
}

export default Myrouter