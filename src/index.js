import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';
import Root from "./routes/Root/Root";
import ErrorPage from "./routes/ErrorPage/ErrorPage"; 
import { Auth, action as authAction } from "./routes/Auth/Auth";
import { Registration, action as registrationAction } from './routes/Registration/Registration';
import UserInterface from './routes/UserInterface/UserInterface';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Auth />,
            action: authAction,
            // loader: loginLoader,
          },
          {
            path: 'registration',
            element: <Registration />,
            action: registrationAction,
          },
          {
            path: 'user',
            element: <UserInterface />,
            // loader: userLoader,
          },
        ]
      },
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
