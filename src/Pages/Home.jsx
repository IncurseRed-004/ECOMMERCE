import React from "react";
import Banner from "../components/Banner";
import Products from "./Products";

function Home({products}){
    return(
        <div>
            <Banner />
            <Products />        
        </div>
    )
}
export default Home;