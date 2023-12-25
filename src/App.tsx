// Libraries
import { Route, Router } from "@solidjs/router";

// Pages
import MainPage from "./pages/MainPage";

// Utilities

const App = () => {

  return (
    <Router>
      <Route path={"/"} component={MainPage} />
    </Router>
  );
};

export default App;
