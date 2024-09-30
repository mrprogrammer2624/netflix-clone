import { RouterProvider } from "react-router-dom";
import NetflixCloneRouter from "./routes";
import "./assets/css/style.css";

function App() {
  return <RouterProvider router={NetflixCloneRouter} />;
}

export default App;
