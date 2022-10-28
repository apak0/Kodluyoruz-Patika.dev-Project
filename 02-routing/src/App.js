import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Error404 from "./components/Error404";




function App() {

  const activeStyle = {
    backgroundColor: "red",
  };
  
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" 
                  // style={({ isActive }) =>
                  // isActive ? activeStyle : undefined}
                  // end
                  activeclassname="active"
                  end
                  >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                // style={({ isActive }) =>
                // isActive ? activeStyle : undefined}
                activeclassname="active"
                >About</NavLink>
              </li>
              <li>
              <NavLink to="/users"
                // style={({ isActive }) =>
                // isActive ? activeStyle : undefined}
                activeclassname="active"
                >Users</NavLink>

              
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            
                <Route path="/"  element={<Home />} />
                <Route path="/about/"  element={<About />} />
                <Route path="/users/*" element={<Users />} />
                <Route path="*" element={<Error404 />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
