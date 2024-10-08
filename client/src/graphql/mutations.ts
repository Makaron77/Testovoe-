import {  gql } from 'graphql-request';

export const LoginMutation = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			access_token
			refresh_token
		}
	}
`;
export const UserQuery = gql`
	query {
		myProfile {
			id
			name
			avatar
		}
	}
`;