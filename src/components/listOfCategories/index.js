import React from "react";
import {Category} from "../category";
import {List, Item} from "./styles";
import {categories} from "../../../api/db.json";

export const ListOfCategories = () => {
	return (
		<List>
			{
				categories.map(cat => <Item key={cat.id}> <Category {...cat} /> </Item> )
			}
		</List>
	)
}