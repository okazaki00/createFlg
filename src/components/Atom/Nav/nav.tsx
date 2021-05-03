import * as React from 'react';
import StyledNav from './nav.styled';

type Props = {
    open: boolean;
    setOpen: Function;
};

export const Nav: React.FC<Props> = ({ open, setOpen }) => {
    return (
        <div>
            <nav aria-expanded={open}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Main</li>
                    <li>How</li>
                </ul>
            </nav>
        </div>
    );
};