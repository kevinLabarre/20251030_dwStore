import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Homepage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ProductPage } from "./pages/ProductPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />, // <Root /> est le composant "function Root()" {} ci-dessous
      errorElement: <>Erreur de chargement</>,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "produits",
          element: <ProductPage />,
        },
        {
          path: "produits/details/:slug",
          element: <ProductDetailPage />,
        },
        {
          path: "connexion",
          element: <LoginPage />,
        },
        {
          path: "*",
          element: <h1>404</h1>,
        },
      ],
    },
  ]);

  // Composant lié à la route principale
  function Root() {
    return (
      <>
        <Navbar />
        <Outlet />
        {/* <h1>Footer</h1> */}
      </>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
