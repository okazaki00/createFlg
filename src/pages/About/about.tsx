import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, StyledAbout} from './about.styled';
import Grid from '@material-ui/core/Grid';

interface Props extends RouteComponentProps {}

const About = ({ history }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <StyledAbout>
    <div>
      <Grid container alignItems="center" justify="center">
        <h1 className="title">About</h1>
      </Grid>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="main">自動売上フラッグ生成メーカーとは？</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            自動で売上フラッグを作ることができるサイトとなっております。<br />
            ここで作ったものはご自由にお使いください。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="main">author</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            ねりこ<br />
            創作が好きな人。<br />
            しがない駆け出しエンジニアです。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="main">attention</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            マナーを守ってお使いください。<br />
            トラブルに関しては一切責任を取ることはできません。
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </StyledAbout>
  );
};

export default About;