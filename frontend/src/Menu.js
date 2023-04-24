import { useState } from "react"
import { NavLink } from "react-router-dom";

import '../css/header.css'

import { useRecoilValue } from "recoil";
import { loginState } from "./components/atoms/login";

export default function Menu() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const StateLogin= useRecoilValue(loginState)

//https://icons8.com/icon/set/popular/ios      library icons


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
          
          <div className="espMem">
            <NavLink to={"/"}>
              <button type="button">
                <p><img className="fit-picture" src='../img/icons/home.png'/>Acceuil</p>
                </button>
                </NavLink>
            </div>
          </li>
         
          {StateLogin && <>
          <li>
          <div className="espMem">
            
          </div>
          <div className="espMem">
            <NavLink to="/conn/dashboard">
              
            <button type="button">
              
              <p><img className="fit-picture" src='../img/icons/dashboard.png'/>Tableau de bord</p>
              </button>
              </NavLink>
            </div>
          </li>
          <li>

          <div className="espMem">
            <NavLink to="/conn/places">
            
              <button type="button">
              
                <p><img className="fit-picture" src='../img/icons/place.png'/>Mes places</p>
                </button>
              
              </NavLink>
            </div>
          </li>
          <li>
          
          <div className="espMem">
            <NavLink to="/conn/suggestions">
            
              <button type="button">
              
                <p><img className="fit-picture" src='../img/icons/idea.png'/>Mes suggestions</p>
                </button>
              
              </NavLink>
            </div>
        </li>
        <li>
          
          <div className="espMem">
            <NavLink to="/conn/admin">
            
              <button type="button">
              
                <p><img className="fit-picture" src='../img/icons/admin.png'/>Administration</p>
                </button>
              
              </NavLink>
            </div>
        </li>
</>}
          
          
		  <li>
      
      <div className="espMem">
            <NavLink to="/offers">

            
              <button type="button">
              
                <a><img className="fit-picture" src='../img/icons/offer.png'/>Nos offres</a>
                </button>
            
            </NavLink>
            </div>
          </li>
          
		  
		  <li>
      <div className="espMem">
            
          </div>
      <div className="espMem">
            <NavLink to="/contact">
            
              <button type="button">
                <p><img className="fit-picture" src='../img/icons/contact.png'/>Nous contacter</p>
                </button>
              
              </NavLink>
            </div>
          </li>
          
		  <li>
      {StateLogin ? 
      
          <>
          <div className="espMem">
            <NavLink to="/conn/profile">
            
              <button type="button">
              
                <p><img className="fit-picture" src='../img/icons/user-login.png'/>Espace Membre</p>
              </button>
              </NavLink> 
          </div>
          </>
          :
          <>
          
          <div className="espMem">
          
            <NavLink to="/connexion">
              <button type="button">
            
              <p><img className="fit-picture" src='../img/icons/user-logout.png'/>Espace Membre</p>
              </button>
              </NavLink> 
          </div>
          
          
          </>

        }
        </li>
        
        </ul>
      </div>
    </nav>
  );
}