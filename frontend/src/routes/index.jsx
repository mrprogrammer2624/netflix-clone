import { AuthLayout, DashboardLayout } from "@/layouts";
import { Login, SignUp } from "@/pages/Authentication";
import { NotFoundPage } from "@/pages/Error";
import {
  MainPage,
  WatchPage,
  SearchPage,
  SearchHistoryPage,
} from "@/pages/Main";
import { createBrowserRouter } from "react-router-dom";

const NetflixCloneRouter = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      children: [
        {
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <MainPage />,
            },
            {
              path: "/watch/:id",
              element: <WatchPage />,
            },
            {
              path: "/search",
              element: <SearchPage />,
            },
            {
              path: "/history",
              element: <SearchHistoryPage />,
            },
          ],
        },
        {
          /* Authentication Routes For Super Admin */
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <SignUp />,
            },
          ],
        },
      ],
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  {
    /* Base URL */
    // basename: "/netflix-clone",
  }
);

export default NetflixCloneRouter;
