import * as React from 'react';
import './header';

interface IProps {
    title: string;
}

export class Header extends React.Component<IProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
            </header>
        );
    }
}
