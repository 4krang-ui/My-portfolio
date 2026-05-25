import {createRoot} from "react-dom/client"
const root= createRoot(document.getElementById("root"))

import App from "./App.jsx"



root.render(
  <App />
)















/* import {createRoot} from "react-dom/client"
import {Fragment} from "react"
import Body from "/src/body.jsx"
const root= createRoot(document.getElementById("root"))

   
function Header(){
    return(
   <header className="header"> 
 <img src="reactlogo.jpg" className="logo" alt="React logo" />
 <nav>
        <ul className="nav-list">
            <li className="nav-item">Pricing</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
        </ul>
 </nav>
</header>      )
}

function Footer(){
    return(
        <footer>
        <small>© 2024 Maxiii Development. All rights reserved.</small>
    </footer>
    )
}

function Page(){
return(
    <>
<Header /> 
<Body />
<Footer />
</>
)}

  root.render(
    <Page />)*/