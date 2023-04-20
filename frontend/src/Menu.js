import { useState } from "react"
import { NavLink } from "react-router-dom";

import '../css/header.css'

import { useRecoilValue } from "recoil";
import { loginState } from "./components/atoms/login";

export default function Menu() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const StateLogin= useRecoilValue(loginState)
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Consommacteur
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {
		
		<svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>

		}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
        >
        
          <li>
            <NavLink to={"/"}>Acceuil</NavLink>
          </li>
         
          {StateLogin && <>
          <li>
            <NavLink to="/conn/dashboard">Tableau de bord</NavLink>
          </li>
          <li>
            <NavLink to="/conn/places">Mes places</NavLink>
          </li>
          <li>
            <NavLink to="/conn/suggestions">Mes suggestions</NavLink>
        </li>
</>}
          
          
		  <li>
            <NavLink to="/offers">Nos offres</NavLink>
          </li>
          
		  
		  <li>
            <NavLink to="/contact">Nous contacter</NavLink>
          </li>
          
		  <li>
      {StateLogin ? <>
            <NavLink to="/conn/profile">Espace Membre</NavLink>
            </>
          :
          <><NavLink to="/connexion">Espace Membre</NavLink></>

        }
        </li>

        </ul>
      </div>
    </nav>
  );
}