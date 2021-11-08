import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Main: React.FC = ({children}) => {
    return (
        <>
        {/*TODO META tag*/ }
        <Nav></Nav>
        {children}
        <Footer></Footer>
        </>
    );
};

export default Main;
