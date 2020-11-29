import {keyframes, css} from "styled-components"

const fadeInKeyframes = keyframes`
	from {
		filer: blur(5px);
		opacity: 0;
	}

	to {
		filer: blur(0);
		opacity: 1;
	}
`

export const fadeIn = ({ time= "1s", type= "ease"} = {}) => css`animation: ${time} ${fadeInKeyframes} ${type};`