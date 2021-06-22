import Book from "./components/Book";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/Theme.css";
import "./css/App.css";
function App() {
  let dataMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let data = {
    Images: [],
    Names: [],
    Description: [
      // 1
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 2
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 3
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 4
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 5
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 6
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 7
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 8
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 9
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 10
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ],
  };
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
          path="/Publications"
          render={() => {
            return (
              <>
                <div className="Book-Shelf">
                  {dataMap.map((i) => {
                    return (
                      <Book
                        key={i}
                        ImageURL={data.Images[i]}
                        Title={data.Names[i]}
                        Text={data.Description[i]}
                      />
                    );
                  })}
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
