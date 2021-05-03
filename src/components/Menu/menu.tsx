import * as React from 'react';
import { useRef } from 'react';
import { StyledMenu, StyledLink} from './menu.styled';

import { useOnClickOutside } from '../../hooks';

import Burger from '../Burger/burger';

export type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
}

const Menu = (props: Props) => {
    const node = useRef<HTMLDivElement>(null);
    useOnClickOutside(node, () => props.setOpen(false));

    return (
        <div ref={node}>
            <StyledMenu open={props.open}>
                <StyledLink onClick={() => props.setOpen(false)} to="/" exact={true}>
                </StyledLink>
                <StyledLink onClick={() => props.setOpen(false)} to="/about" exact={true}>
                </StyledLink>
                <StyledLink onClick={() => props.setOpen(false)} to="/main" exact={true}>
                </StyledLink>
                <StyledLink onClick={() => props.setOpen(false)} to="/how" exact={true}>
                </StyledLink>
            </StyledMenu>

            <Burger open={props.open} setOpen={props.setOpen} />
        </div>
    );
};

export default Menu;