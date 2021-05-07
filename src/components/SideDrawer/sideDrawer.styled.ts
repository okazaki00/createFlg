import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

export const MAX_SMARTPHONE_SIZE = 768;
export const MIN_TABLET_SIZE = 769;

interface ISideDrawerWrapperProps {
    show: boolean;
}

export const SideDrawerWrapper = styled.nav`
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 300px;
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
    ${(props: ISideDrawerWrapperProps) =>
        props.show &&
        css`
            box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5);
            transform: translateX(0);
        `}
    @media (min-width: ${MIN_TABLET_SIZE}px) {
        display: none;
    }
`;


export const TitleAreaWrapper = styled.div`
    height: 56px;
    background: #df4848;
`;

export const TitleWrapper = styled.p`
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin: 0;
`;

export const LinkListWrapper = styled.div`
    height: 100%;
    padding: 0 0;
    margin: 0 0;
    list-style: none;
    justify-content: center;
`;

export const LinkWrapper = styled(Link)`
    display: block;
    padding: 1rem 0;
    padding-left: 1rem;
    border-bottom: thin solid black;
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover,
    &:active {
        background-color: #c2203b;
    }
`;