import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from './Loading';

const Nav = lazy(()=>import("./NavBar"));
const ErrorPage = lazy(()=>import("./ErrorPage"));
const News = lazy(()=>import("./News"));
const Crops = lazy(()=>import("./CropsDetails"));
const Weather = lazy(()=>import("./Weather"));
const Login = lazy(()=>import("./Login"));
const Signup = lazy(()=>import("./Signup"));




const route = createBrowserRouter([
    {
        path:"/dashboard/",
        element:<Nav />,
        errorElement:<ErrorPage />,
        children: [
            {
                index: true,
                path:"/dashboard/news",
                element:<News />
            },
            {
                index: true,
                path:"/dashboard/crops",
                element:<Crops />
            },
            {
              index: true,
              path:"/dashboard/weather",
              element:<Weather />
          },
            
        ]
    },{
      path:"/sign-up",
      element:<Signup />,
      errorElement:<ErrorPage />,
    },
    {
      path:"/",
      element:<Login />,
      errorElement:<ErrorPage />,
    },
  ]);
  

  const Routing = () => {
    return (
      <Suspense fallback={<Loading />}>
        <RouterProvider router={route} />
      </Suspense>
    );
  };
  
  export default Routing;