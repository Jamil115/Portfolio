import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  let allRoute = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/education',
        element: <Education />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  )
  return (
    <>
      <RouterProvider router={allRoute} />
    </>
  );
}

export default App;
