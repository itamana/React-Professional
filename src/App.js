import React from 'react';
import {Category} from "./components/category";
import {ListOfCategories} from "./components/listOfCategories";
import {GlobalStyle} from "./GlobalStyles";
import {ListOfPhotoCards} from "./components/ListOfPhotoCards";
import {Logo} from "./components/Logo";

export const App = () => (
	<div>
		<GlobalStyle />
		<Logo/>
		<ListOfCategories/>
		<ListOfPhotoCards />
	</div>
);