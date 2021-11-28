import Home from "./pages/Home";
import Log from "./pages/Log";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Research from "./pages/Research";

const routes = [
    {
      path: '/',
      component: Home  
    },{
      path: '/research',
      component: Research
    },{
      path: '/log',
      component: Log
    },{
      path: '/login',
      component: Login  
    },{
      path: '/signup',
      component: Signup
    },
];

export default routes;