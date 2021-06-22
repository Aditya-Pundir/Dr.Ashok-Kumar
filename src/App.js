import Book from "./components/Book";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/Theme.css";
import "./css/App.css";
function App() {
  let dataMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let data = {
    Images: [
      // 1
      "https://i.pinimg.com/originals/9b/02/3f/9b023f2b842d04454b8f57cde4b5c066.jpg",
    ],
    Names: [
      // 1
      "Bouganvellia",
    ],
    Description: [
      // 1
      "Description: Bougainvillea is a genus of thorny ornamental vines, bushes, and trees belonging to the four o' clock family, Nyctaginaceae. It is native to eastern South America, found from Brazil, west to Peru, and south to southern Argentina. Different authors accept from 4 to 18 species in the genus. The inflorescence consists of large colourful sepal-like bracts which surround three simple waxy flowers.",
      // 2
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
      // 3
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
      // 4
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
      // 5
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
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
      // 11
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 12
      "Description: Some random text going around - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // 13
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
