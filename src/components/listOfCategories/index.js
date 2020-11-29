import React from "react";
import {Category} from "../category";
import {List, Item} from "./styles";

export const ListOfCategories = () => {
	return (
		<List>
			{
				[1, 2, 3, 4].map(cat => <Item key={cat}> <Category /> </Item> )
			}
		</List>
	)
}