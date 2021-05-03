import * as React from 'react';
import { useState, ReactNode } from 'react';

import { Burger } from '../Atom/Burger/burger';
import { Nav } from '../Atom/Nav/nav';

type Props = {
    children: ReactNode; 
};

export const LayoutTop: React.FC<Props> = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Burger open={open} setOpen={setOpen} />
            <Nav open={open} setOpen={setOpen} />
            <div>
                <main>{children}</main>
            </div>
        </>
    );
 };