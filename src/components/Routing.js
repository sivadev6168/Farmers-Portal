import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from './Loading';

const Nav = lazy(()=>import("./NavBar"));
const ErrorPage = lazy(()=>import("./ErrorPage"));
const News = lazy(()=>import("./News"));
const Crops = lazy(()=>import("./CropsDetails"));
const Weather = lazy(()=>import("./Weather"));




const route = createBrowserRouter([
    {
        path:"/",
        element:<Nav />,
        errorElement:<ErrorPage />,
        children: [
            {
                index: true,
                path:"/",
                element:<News />
            },
            {
                index: true,
                path:"/Crops Search",
                element:<Crops />
            },
            {
              index: true,
              path:"/Weather",
              element:<Weather />
          },
            
        ]
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