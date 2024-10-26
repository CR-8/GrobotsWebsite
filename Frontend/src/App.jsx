// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import Gallery from "./pages/gallery";
import Signin from "./pages/signin";
import Competition from "./pages/competition";
import Navbar from "./components/navbar";
import Animation from "./components/animation"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Animation/>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Navbar />
        <Profile />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <Navbar />
        <Gallery />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Navbar />
        <Signin />
      </>
    ),
  },
  {
    path: "/competition",
    element: (
      <>
        <Navbar />
        <Competition />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
