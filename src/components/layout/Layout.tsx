import React from "react";
import Header from "../header/Header";

const Layout = (props: any) => {
    return (
        <div>
            <Header />
            { props.children }
        </div>
    )
}

export default Layout;