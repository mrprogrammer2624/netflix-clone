import { createBrowserRouter } from "react-router-dom";
/* */ const NetflixCloneRouter = createBrowserRouter(
  /* All Paths */
  [
    {
      path: "/",
      element: <>404 - Page Not Found</>,
    },
    {
      /* Default Route (404) */
      path: "*",
      element: <>404 - Page Not Found</>,
    },
  ],
  {
    /* Base URL */
    basename: "/netflix-clone",
  }
);

export default NetflixCloneRouter;
