// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Navbar,Animation, Footer} from "./components/components.js"
import {Home, Gallery, About, Profile, Competition, Sigin} from "./pages/pages.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Animation/>
        <Navbar />
        <Home />
        <Footer/>
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
        <Sigin />
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
