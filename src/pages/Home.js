import React, {Fragment} from "react";
import {ListOfCategories} from "../components/listOfCategories";
import {ListOfPhotoCards} from "../container/ListOfPhotoCards";
import { Layout } from "../components/Layout";

const HomePage = ({ id }) => {
	return (
		<Layout title="PetGram - Your pets photos app" description="With PetGram you can find pretty pets photos">
			<ListOfCategories/>
			<ListOfPhotoCards categoryId={ id }/>
		</Layout>
	)
}

export const Home = React.memo(HomePage, (prevProps, props) => {
	return prevProps.id === props.id
});