import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MAX_SMARTPHONE_SIZE = 768;
export const MIN_TABLET_SIZE = 769;

export const MenuIconWrapper = styled.div`
    @media (min-width: ${MIN_TABLET_SIZE}px) {
        display: none;
    }
`;

export const TitleWrapper = styled(Link)`
    color: white;
    font-size: 1.5rem;
    padding: 0 1rem;
    text-decoration: none;
    @media (min-width: ${MIN_TABLET_SIZE}px) {
        padding: 0 0rem;
    }
`;

export const GrowWrapper = styled.div`
    flex: 1;
`;

export const NavigationItemsWrapper = styled.div`
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    @media (max-width: ${MAX_SMARTPHONE_SIZE}px) {
        display: none;
    }
`;

export const LinkWrapper = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 16px 1rem;
`;