import { Fragment } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Fragment className="App">
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
