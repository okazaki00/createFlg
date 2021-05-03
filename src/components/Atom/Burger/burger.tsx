import * as React from 'react';
import { useState } from 'react';
import  StyledBurger  from './burger.styled';

type Props = {
    open: boolean;
    setOpen: Function;
}

export const Burger: React.FC<Props> = ({
    open,
    setOpen
}) =>  {
    return (
        <>
            <StyledBurger>
                <button
                type="button"
                className="button-humburger"
                aria-controls="global-nav"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                >
                    <span className="hamburgerLine">
                        <span className="visuallyHidden">
                            メニューを開閉する
                        </span>
                    </span>
                </button>
            </StyledBurger>
        </>
    );
};