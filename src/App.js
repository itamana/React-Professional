import React from 'react';
import {Category} from "./components/category";
import {ListOfCategories} from "./components/listOfCategories";
import {GlobalStyle} from "./GlobalStyles";

export const App = () => (
	<div>
		<GlobalStyle />
		<ListOfCategories/>
	</div>
);