import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Careers } from "./pages/careers";
import { Roadmap } from "./pages/roadmap";
import { Home } from "./pages/index";
import { Team } from "./pages/team";
import { Docs } from "./pages/docs";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/team" Component={Team} />
        <Route path="/docs" Component={Docs} />
        <Route path="/roadmap" Component={Roadmap} />
        <Route path="/careers" Component={Careers} />
      </Routes>
    </Router>
  );
};
