import Home from "./pages/Home";
import Log from "./pages/Log";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Research from "./pages/Research";
import Researchdetail from "./pages/Researchdetail";

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
    },{
      path: '/research/:id',
      component: Researchdetail
    },
];

export default routes;