import React, {Fragment} from "react";
import {FavsWithQuery} from "../container/GetFavs";
import { Helmet } from "react-helmet";
import { Layout } from "../components/Layout";

export default () => (
	<Layout title="Your favorites" subtitle="Here you can find your favorites pets">
		<FavsWithQuery/>
	</Layout>
)