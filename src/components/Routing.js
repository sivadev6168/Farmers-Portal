import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from './Loading';

const Nav = lazy(()=>import("./NavBar"));




const route = createBrowserRouter([
    // {
    //     path:"/",
    //     element:<Nav />,
    //     errorElement:<ErrorPage />,
    //     children: [
    //         {
    //             index: true,
    //             path:"/",
    //             element:<Index />
    //         },
    //         {
    //             index: true,
    //             path:"/Shop",
    //             element:<Shop />
    //         },
    //         {
    //             path:"/Mens-clothing",
    //             element:<MensClothing />
    //         },
    //         {
    //             path:"/Jewelery",
    //             element:<Jewelery />
    //         },
    //         {
    //             path:"/Electronics",
    //             element:<Electronics />
    //         },
    //         {
    //             path:"/WomensClothings",
    //             element:<WomensClothings />
    //         },
    //     ]
    // },
  ]);
  

  const Route = () => {
    return (
      <Suspense fallback={<Loading />}>
        <RouterProvider router={route} />
      </Suspense>
    );
  };
  
  export default Route;