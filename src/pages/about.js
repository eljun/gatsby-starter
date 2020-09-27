import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default function About(){
    return(        
        <div style={{ color: `teal`}}>
            <Header headerText="About Us"/>         
            <p>Welcome to our about us page</p>
        </div>
    )
}