// import { useState } from 'react'bA
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'nmETERa
// a
// import vidos from './assets/vidos.mov';vhorasdstime
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
} from "react-router-dom";
// import asds from "./assets/aSda.mp4";

import "./App.css";

import Layout from "./components/Layout";

import MainPage from "./pages/Main";
import Gallery from "./pages/Gallery";
// {1340}мшвущxarch-itemarch-itemenvironment
const router = createBrowserRouter([
  {
    path: "/JohnnyBichevski",
    element: (
      <Layout>
        <MainPage />
      </Layout>
    ),
  },
  {
    path: "/JohnnyBichevski/gallery",
    element: <Layout><Gallery/></Layout>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
