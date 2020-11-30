import React from 'react';
import {Category} from "./components/category";
import {GlobalStyle} from "./styles/GlobalStyles";
import {Logo} from "./components/Logo";
import {PhotoCardWithQuery} from "./container/PhotoCardWithQuery";
import {Home} from "./pages/Home";
import {Router} from "@reach/router";
import { Detail } from "./pages/Detail";
import {NavBar} from "./components/NavBar";

export const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Logo/> 
			<Router>
				<Home path="/"/>
				<Home path="/pet/:id"/>
				<Detail path="/detail/:detailId"/>
			</Router>
			<NavBar />
		</div>
	);
}