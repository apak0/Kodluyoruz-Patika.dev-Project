import {useEffect, useState} from "react"
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import axios from "axios"
import User from "./User"

function Users() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true)

  const activeStyle = {
    backgroundColor: "red",
  };

 useEffect(()=> {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data) )
    .finally(()=> setLoading(false))
  },[])

  return (
   <div>
      <h1>Users</h1>
      {loading && <div>Loading... </div>}
        <ul>
          {
          users.map((user) =>
            (

              <li key={user.id}>
                <NavLink to={`/users/${user.id}`} style={({ isActive }) =>
                  isActive ? activeStyle : undefined}
                   >{user.name}</NavLink>
              </li>
            ) )
          }
        </ul>

      <Outlet/>
       
      <Routes>
       <Route path="/:id" element={<User/>}/>
      </Routes>
    </div>
    
  );
}

export default Users;
