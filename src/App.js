import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router } from "react-router-dom";

import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import MyRoute from "./Components/route/route";
import Loader from "./Components/loader/loader";
import "./App.css";
import "./Components/discounts/discounts.css";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router>
          <Header />
          <MyRoute />
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
