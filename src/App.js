// import logo from "./logo.svg";
import "./index.css";
import Navbar from "./navbar";
import Home from "./home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  // const title = "Welcome to new blog";
  // const liked = 50;
  // const link =
  //   "https://www.fragrantica.com/perfume/SAP-Perfume/Saffron-Oud-73205.html";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <h1> {title}</h1>
          <p> liked {liked} times</p>
          <a href={link}>perfume shop</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

// function createHelloWorld() {}
