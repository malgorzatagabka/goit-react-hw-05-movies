import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`


    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill,minmax(320px,1fr));
    grid-gap: 16px;
    list-style: none;
    align-items: center;
    margin-bottom:60px;

`;

export const Wrapper = styled.div`

text-decoration:none;
border-radius: 2px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
max-height:420px;
text-align: center;
`

export const Image = styled.img`
    width:100%;
    object-fit: cover;
    height: 260px;
    border-radius: 2px;

`

export const StyledLink = styled(Link)`
 text-decoration:none;
 font-weight:600;
color:black;
`