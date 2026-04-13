import {createBrowserRouter,RouterProvider} from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
