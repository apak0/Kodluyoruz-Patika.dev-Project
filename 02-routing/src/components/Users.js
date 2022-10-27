import {useEffect, useState} from "react"
import { Link, Routes, Route,useMatch, Outlet } from "react-router-dom";
import axios from "axios"
import User from "./User"

function Users() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true)

  
  
  
  useEffect(()=> {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data) )
    .finally(()=> setLoading(false))
  },[])

  return (
    <div>

    
    <div>
      <h1>Users</h1>
      {loading && <div>Loading... </div>}
      <ul>
      {
        users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`} >{user.name}</Link>
          </li>
        ) )
      }
      </ul>

      <div>
        <Outlet/>
        <Routes>
          <Route path="users" element={<Users/>}/>
          <Route path="user/:id" element ={<User/>}/>
        </Routes>

      </div>


   
    </div>
    <Outlet />
  </div>
  );
}

export default Users;
