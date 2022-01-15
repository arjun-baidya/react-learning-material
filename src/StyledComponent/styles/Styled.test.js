// import  "styled-components";
import styled from "styled-components";

// now we will create new tag/component and export it to use another file to import it

export const FullDiv = styled.div`
    padding-bottom: 50px;
`;

export const H1 = styled.h1`
    color: green;
    text-align: center;
    font-size: 25px;
`;

export const P = styled.p`
    color: red;
    background-color: aquamarine;
    font-size: 20px;
    text-align: justify;
    padding: 40px;
`;

export const Button = styled.button`
    background-color: aquamarine;
    color: white;
    font-size: 20px;
    padding: 15px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
`;

