import * as React from 'react';
import  StyledHome  from './home.styled';
import { Animate } from 'react-simple-animate';
import { Router, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}
const Home = ({ match, history, location }: Props) => (
    <>
            <StyledHome>
                <div>
                    <p>あなたの</p>
                    <p>本の</p>
                    <p className="strong">売上フラッグ、</p>
                    <p>作ります。</p>
                </div>
            </StyledHome>
    </>
  );
  
  export default Home;