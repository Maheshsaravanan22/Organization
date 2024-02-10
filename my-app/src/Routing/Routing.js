import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Adduser from '../Pages/Admin/AddUser';
import UserLists from "../Pages/Admin/UserList";
import ViewUser from "../Pages/Admin/ViewUser";
import EditUser from "../Pages/Admin/EditUser";
import DeleteUser from "../Pages/Admin/DeleteUser";
import UserData from '../Pages/User/UserData';

function Routing(){
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Adduser" element={<Adduser/>}/>
                <Route path="/UserLists" element={<UserLists/>}/>
                <Route path="/UserData" element={<UserData/>}/>
                <Route path="/ViewUser/:id" element={<ViewUser />} />
                <Route path="/EditUser/:id" element={<EditUser />} />
                <Route path="/DeleteUser/:id" element={<DeleteUser />} />
            </Routes>
        </Router>
    </div>
  )
}

export default Routing;