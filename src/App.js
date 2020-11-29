import React from 'react';
import {Category} from "./components/category";
import {ListOfCategories} from "./components/listOfCategories";
import {GlobalStyle} from "./GlobalStyles";
import {ListOfPhotoCards} from "./components/ListOfPhotoCards";
export const App = () => (
	<div>
		<GlobalStyle />
		<ListOfCategories/>
		<ListOfPhotoCards />
	</div>
);