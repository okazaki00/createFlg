
import * as React from 'react';
import  StyledHeader  from './header.styled';

interface IProps {
    title: string;
}

export class Header extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledHeader>
                <p>{this.props.title}</p>
            </StyledHeader>
        );
    }
}