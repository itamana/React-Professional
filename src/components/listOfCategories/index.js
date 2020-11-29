import React, {Fragment, useState, useEffect} from "react";
import {Category} from "../category";
import {List, Item} from "./styles";
//import {categories} from "../../../api/db.json";

export const ListOfCategories = () => {
	const [categories, setCategories] = useState([]);
	const [showFixed, setShowFixed] = useState(false);

	useEffect(function () {
		window.fetch("https://react-professional-server-9txja36ig.vercel.app/categories")
			.then(res => res.json())
			.then(data => {
				setCategories(data);
			})
	},[]);

	useEffect(function () {
		const onScroll = e => {
			const newShowFixed = window.scrollY > 200;
			showFixed !== newShowFixed && setShowFixed(newShowFixed)
		}

		document.addEventListener("scroll", onScroll);

		return () => document.removeEventListener("scroll", onScroll);
	}, [showFixed]);

	const renderList = (fixed) => (
		<List className={fixed ? "fixed" : ""}>
			{
				categories.map(cat => <Item key={cat.id}> <Category {...cat} /> </Item> )
			}
		</List>
	)

	return (
		<Fragment>
			{renderList()}
			{showFixed && renderList(true)}
		</Fragment>
	)
}