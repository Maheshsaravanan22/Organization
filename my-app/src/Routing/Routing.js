import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Adduser from '../Pages/Admin/AddUser';
import Addadmin from '../Pages/Admin/Addadmin';
import UserLists from "../Pages/Admin/UserList";
import ViewUser from "../Pages/Admin/ViewUser";
import Viewuserdata from "../Pages/User/ViewUserData";
import EditUserData from "../Pages/User/EditUserData";
import ViewAdmin from "../Pages/Admin/ViewAdmin";
import EditUser from "../Pages/Admin/EditUser";
import EditAdmin from "../Pages/Admin/EditAdmin";
import DeleteUser from "../Pages/Admin/DeleteUser";
import DeleteAdmin from "../Pages/Admin/DeleteAdmin";
import UserData from '../Pages/User/UserData';

function Routing(){
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Adduser" element={<Adduser/>}/>
                <Route path="/Addadmin" element={<Addadmin/>}/>
                <Route path="/UserLists" element={<UserLists/>}/>
                <Route path="/UserData" element={<UserData/>}/>
                <Route path="/ViewUser/:id" element={<ViewUser />} />
                <Route path="/ViewUserData/:id" element={<Viewuserdata />} />
                <Route path="/ViewAdmin/:id" element={<ViewAdmin />} />
                <Route path="/EditUser/:id" element={<EditUser />} />
                <Route path="/EditUserData/:id" element={<EditUserData />} />
                <Route path="/EditAdmin/:id" element={<EditAdmin />} />
                <Route path="/DeleteUser/:id" element={<DeleteUser />} />
                <Route path="/DeleteAdmin/:id" element={<DeleteAdmin />} />
            </Routes>
        </Router>
    </div>
  )
}

export default Routing;