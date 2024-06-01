import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Band from "../pages/Band";
import NotFound from "../pages/notfound";
import Tour from "../pages/Tour";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";
export default function AppRoute() {
  return (
    <>
      <Router>
        <nav id="navbar">
          <div>
            <Link id="link" to="home">
              Home
            </Link>
            <Link id="link" to="band">
              Band
            </Link>
            <Link id="link" to="tour">
              Tour
            </Link>
            <Link id="link" to="login">
              Contact
            </Link>
            <Link id="link" to="login">
              More
            </Link>
          </div>
          <div id="search">
            <SearchIcon />
          </div>
        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="band" element={<Band />} />
          <Route path="tour" element={<Tour />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
