import React from "react";
import Navbar from "./components/Navbar";
import routes from "./routes";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {routes.map(route =>{
            return(
              <Route key={route.path} path={route.path} exact={true} element={<route.component/>}>
              </Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;