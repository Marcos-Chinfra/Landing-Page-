import React from "react";
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import AboutUs from "./AboutUs.jsx"
import Products from "./Products.jsx";
import Blog from "./Blog.jsx"
import Footer from "./Footer.jsx"
import '../styles/global.css'


const App = () => {
    return(
        <React.Fragment>
            <Header />
            <Main />
            <AboutUs />
            <Products />
            <Blog />
            <Footer />
        </React.Fragment>
    );
}

export default App;