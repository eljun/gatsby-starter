import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>   
      <Header headerText="Homepage"/>      
      <img src="https://images.unsplash.com/photo-1600054663841-93246efbf53c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=400"></img>
      <h1>Hello gatsby starter!</h1>
      <p>I am starting to learn gatsby!</p>
    </div>
  );
}
