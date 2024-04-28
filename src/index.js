import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';
import Root from "./routes/Root/Root";
import ErrorPage from "./routes/ErrorPage/ErrorPage"; 
import { Auth, action as authAction } from "./routes/Auth/Auth";
import { Registration, action as registrationAction } from './routes/Registration/Registration';
import UserInterface, {loader as userLoader} from './routes/UserInterface/UserInterface';
import UsersControlPage from './routes/AdminInterface/AdminInterface';
import PersonInfo, {loader as persLoader} from './routes/PersonInfo/PersonInfo';


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
            path: 'files',
            element: <UserInterface />,
            loader: userLoader,
          },
          {
            path: 'admin',
            element: <UsersControlPage />,
          },
          {
            path: 'persinfo',
            element: <PersonInfo />,
            loader: persLoader,
          },
        ]
      },
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
);
