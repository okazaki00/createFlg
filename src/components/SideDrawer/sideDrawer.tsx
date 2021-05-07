import * as React from 'react';
import { Link } from 'react-router-dom';
import { SideDrawerWrapper, TitleAreaWrapper, TitleWrapper, LinkListWrapper, LinkWrapper } from './sideDrawer.styled';

interface ISideDrawerWrapperProps {
    show: boolean;
}

interface IProps extends ISideDrawerWrapperProps {
    drawToggleClickHandler(): void;
}

class SideDrawer extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <SideDrawerWrapper show={this.props.show}>
                <TitleAreaWrapper>
                    <TitleWrapper>Menu</TitleWrapper>
                </TitleAreaWrapper>
                <LinkListWrapper>
                    <LinkWrapper to="/" onClick={this.clickHandler}>
                        home
                    </LinkWrapper>
                    <LinkWrapper to="/about" onClick={this.clickHandler}>
                        about
                    </LinkWrapper>
                    <LinkWrapper to="/main" onClick={this.clickHandler}>
                        main
                    </LinkWrapper>
                    <LinkWrapper to="/how" onClick={this.clickHandler}>
                        how to
                    </LinkWrapper>
                </LinkListWrapper>
            </SideDrawerWrapper>
        );
    }

    private clickHandler = () => {
        this.props.drawToggleClickHandler();
    };
}

export default SideDrawer;