import {useEffect, useState} from "react"
import { Link, Routes, Route, Outlet } from "react-router-dom";
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
      <h1>Users</h1>
      {loading && <div>Loading... </div>}
        <ul>
          {
          users.map((user) =>
            (

              <li key={user.id}>
                <Link to={`/users/${user.id}`} >{user.name}</Link>
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
