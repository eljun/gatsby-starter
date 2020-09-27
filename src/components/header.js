import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <div>
      <h1>{props.headerText}</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}