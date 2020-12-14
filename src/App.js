import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import "./css-fontawesome/all.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Carousell from "./components/carousel/Carousel";
import CategoryList from "./components/category/CategoryList";
import Product from "./components/product/Product";
import Filter from "./components/filter/Filter";
import Load from "./components/Loading/Load";
import ContextProvider  from "./components/context/Context";
import ProductInfo from "./components/product-info/ProductInfo";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setIsLoaded(false);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <ContextProvider>
          <div className="App">
            {isLoaded ? <Load /> : null}

            <div>
              <Header />
              <Route path={"/"} exact component={Carousell} />
              <Route path={"/home"} component={Carousell} />
              <Route path={"/contact"} exact component={Contact} />
              <div className="container-fluid media">
                <div className="Category">
                  <Route path={"/"} exact component={CategoryList} />
                  <Route path={"/home"} component={CategoryList} />
                  <Route path={"/category"} component={CategoryList} />
                  <Route path={"/category"} component={Filter} />

                  {/* <Route path={"/"} exact component={Filter} />
                  <Route path={"/home"} component={Filter} /> */}
                </div>

                <Route path={"/"} exact component={Product} />
                <Route path={"/home"} component={Product} />
                <Route path={"/category"} component={Product} />

                <Route path={"/product"} component={ProductInfo} />
              </div>
              <Route path={"/about"} exact component={About} />
              
            </div>

           
            <Route path={"/"} exact component={Footer} />
            <Route path={"/home"} exact component={Footer} />
            <Route path={"/about"} exact component={Footer} />
            <Route path={"/category"} exact component={Footer} />
            <Route path={"/contact"} exact component={Footer} />
            <Route path={"/product"} exact component={Footer} />
            
          </div>
          
        </ContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
