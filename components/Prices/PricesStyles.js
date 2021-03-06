import styled from "styled-components";

export const Container = styled.div`
background-color: var(--cream);
padding: 40px;
    
@media screen and (max-width: 576px) {
    padding: 20px;
    }
`;

export const PriceHeader = styled.h1`
font-family: Unica One, sans-serif;
text-decoration: underline;
`;

export const PriceListItem = styled.li`
font-family: Montserrat, sans-serif;
line-height: 2rem;
list-style: none;
padding-bottom: 2rem;
white-space: pre-line;
    
@media screen and (max-width: 576px) {
    font-size: 1.25rem;
    text-align: left;
    }
`;  