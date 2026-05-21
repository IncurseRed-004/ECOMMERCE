import React from "react";
import Banner from "../components/Banner";
import Products from "./Products";

function Home({products}){
    return(
        <div>
            <Banner />
            <Products products={products}/>        
        </div>
    )
}
export default Home;