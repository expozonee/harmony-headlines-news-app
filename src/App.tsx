import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleNews, { SingleNewsLoader } from "./pages/SingleNews/SingleNews";
import { rootLoader } from "./components/NewsCardList/NewsCardList";
import { NewsProvider } from "./providers/NewsProvider";
import { Suspense } from "react";
import RootLayout from "./layouts/RootLayout/RootLayout";
import SignInPage from "./pages/LoginPage/SignIn";
import SignUpPage from "./pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
        loader: rootLoader,
      },
      {
        path: "news/:id",
        element: <SingleNews />,
        loader: SingleNewsLoader,
      },
      {
        path: "sign-up/*",
        element: <SignUpPage />,
      },
      {
        path: "sign-in/*",
        element: <SignInPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <NewsProvider>
        <RouterProvider router={router} />
      </NewsProvider>
    </>
  );
}

export default App;
