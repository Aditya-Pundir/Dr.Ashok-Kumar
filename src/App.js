import Book from "./components/Book";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/Theme.css";
import "./css/App.css";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <About />;
          }}
        ></Route>
        <Route
          exact
          path="/publications"
          render={() => {
            return (
              <>
                <div className="Book-Shelf">
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                  <Book />
                </div>
              </>
            );
          }}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
