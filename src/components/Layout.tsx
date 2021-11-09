import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import {useRouter} from "next/router";

const Main: React.FC = ({children}) => {
    const router = useRouter();

    // Don't show the navbar and footer on the linktree
    const showLayout = (): boolean => {
        return !router.pathname.includes("links");
    };

    return (
        <>
            {showLayout() ? (
                <>
                    <Nav></Nav>
                    {children}
                    <Footer></Footer>
                </>
            ) : (
                <>{children}</>
            )}
        </>
    );
};

export default Main;
