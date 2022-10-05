import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header () {
    return (
        <LogoContent>
            <Link to={"/"}>
                <h1>CineFlex</h1>
            </Link>
        </LogoContent>
    )
}

// Styled Components //
const LogoContent = styled.div `
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 67px;

    h1 {
        font-family: 'Allerta', sans-serif;
        font-size: 34px;
        color: rgba(230, 0, 0, 0.9);
    }

    a {
        text-decoration: none;
    }
`