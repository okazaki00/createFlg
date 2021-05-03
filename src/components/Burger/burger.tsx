import * as React from 'react';
import StyledBurger  from './burger.styled';

export type Props = {
    open: boolean;
    setOpen: Function;
}

const Burger = (props: Props) => (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
        <div />
        <div />
        <div />
    </StyledBurger>
);

export default Burger;