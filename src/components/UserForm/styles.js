import styled from "styled-components";

export const Form = styled.form`
	padding: 16px 0;
	$[disabled] {
		opacity: .3;
	}
`

export const Input = styled.input`
	border: 1px solid #ccc;
	border-radius: 3px;
	padding: 8px 4px;
	display: block;
	width: 100%;
	left: 0;
	right: 0;
	margin: 0 auto;
	$[disabled] {
		opacity: .3;
	}
`

export const Error = styled.span`
	font-size: 14px;
	color: red;
`

export const Title = styled.h2`
	font-size: 16px;
	font-weight: 500;
	padding: 8px 0;
`