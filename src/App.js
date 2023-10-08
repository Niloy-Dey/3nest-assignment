import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import Dashboard from './Component/Dashboard/Dashboard';
import AllEmployee from './Component/AllEmployee/AllEmployee';
import EmployeeDetails from './Component/AllEmployee/EmployeeDetails';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "home", element: <Home></Home> },
    // { path: "home", element: <Home></Home> },
    { path: "signIn", element: <SignIn></SignIn> },
    { path: "signUp", element: <SignUp></SignUp> },
    { path: "dashboard", element: <Dashboard></Dashboard> },
    { path: "allEmployee", element: <AllEmployee></AllEmployee> },
    { path: "employeeDetails", element: <EmployeeDetails></EmployeeDetails> },
    // { path: "*", element: <NotFound></NotFound> },
    // { path: "contact", element: <Contact></Contact> },
    // { path: "about", element: <About></About> },
  ]);

  return (
    <div className="">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
