import * as React from 'react';
import { Component } from 'react';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import {
    withStyles,
    Theme,
    WithStyles,
    createStyles
} from '@material-ui/core/styles';
import { MenuIconWrapper, TitleWrapper, GrowWrapper, NavigationItemsWrapper, LinkWrapper } from './nav.styled';

const styleSettings = (theme: Theme) => 
    createStyles({
        root: {
            background: "#df4848"
        },
        grow: {
            flex: 1
        }
    });

interface IProps extends WithStyles<typeof styleSettings> {
    drawToggleClickHandler(): void;
}

class Nav extends Component<IProps, {}> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position={'static'} className={classes.root}>
                    <Toolbar>
                        <MenuIconWrapper onClick={this.clickHandler}>
                            <IconContext.Provider
                                value={{ color: "white", size: "1.5em" }}
                            >
                                <MdMenu />
                            </IconContext.Provider>
                        </MenuIconWrapper>
                        <GrowWrapper />
                        <NavigationItemsWrapper>
                            <LinkWrapper to="/">home</LinkWrapper>
                            <LinkWrapper to="/about">about</LinkWrapper>
                            <LinkWrapper to="/main">main</LinkWrapper>
                            <LinkWrapper to="/how">how</LinkWrapper>
                        </NavigationItemsWrapper>
                    </Toolbar>
                </AppBar>
            </div>
        );
     }

     private clickHandler = () => {
        this.props.drawToggleClickHandler();
     };
}

export default withStyles(styleSettings)(Nav);