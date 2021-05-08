import styled from 'styled-components';
import { colors　} from '../../global';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


export const ExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);

  export const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(255, 165, 148)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);
  
  export const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiExpansionPanelDetails);

  export const StyledAbout = styled.div`
    h1 {
        color: ${colors.hotpink};
        font-family: 'Baloo 2', cursive;
        text-align:center;
        border-bottom: solid;
        border-top: solid;
        border-color:　${colors.babypink};
        border-width: 1px;
        width: 200px;
    }

    .main {
        color: white;
        font-size: 24px;
    }
  `;