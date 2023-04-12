import { createRoot } from 'react-dom/client';
import Menu from './menu';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home';
import Dashboard from './components/dashbooard';
import Places from './components/places';
import Offers from './components/offers';
import Suggestions from './components/suggestions';
import Contacts from './components/contacts';
import Connexion from './components/connexion';



const root = createRoot(document.querySelector('.appContainer'));
root.render(
	<>
		<BrowserRouter>
			<Menu/>
			<Routes>
				<Route path="/" element={<Home/>} />

				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/places" element={<Places/>} />
				<Route path="/offers" element={<Offers/>} />
				<Route path="/suggestions" element={<Suggestions/>} />
				<Route path="/contact" element={<Contacts/>} />
				<Route path="/connexion" element={<Connexion/>} />


				
			</Routes>
		</BrowserRouter>
</>
);
