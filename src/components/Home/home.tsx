import * as React from 'react';
import  StyledHome  from './home.styled';
import { Animate } from 'react-simple-animate';

export type IProos = {
    play: boolean;
}

const Home = ({ play }) => (
    <>
      <Animate
        play={play}
        start={{ opacity:1, filter: 'blur(0)' }}
        end={{ opacity: 0, filter: 'blur(10px)' }}
      >
            <StyledHome>
                <div>
                    <p>あなたの</p>
                    <p>本の</p>
                    <p className="strong">売上フラッグ、</p>
                    <p>作ります。</p>
                </div>
            </StyledHome>
      </Animate>
    </>
  );
  
  export default Home;