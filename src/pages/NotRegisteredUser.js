import React, {Fragment} from "react";
import Context from "../Context";
import {UserForm} from "../components/UserForm";
import {RegisterMutation} from "../container/RegisterMutation";

export const NotRegisteredUser = () => (
	<Context.Consumer>
		{
			({ activateAuth }) => {
				return <Fragment>
					<RegisterMutation>
					{
						(register, {data, loading, error}) => {
							const onSubmit = ({email, password}) => {
								const input = {email, password}
								const variables = {input}
								register({ variables}).then(activateAuth)
							}

							const errorMsg = error &&  "The user is already exists or something went wrong"

							return <UserForm disabled={loading} error={errorMsg} title="Register" onSubmit={onSubmit} /> 
						}
					}
					</RegisterMutation>
					<UserForm title="Login" onSubmit={activateAuth} />
				</Fragment>
			}
		}
	</Context.Consumer>
)