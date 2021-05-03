import styled from 'styled-components';
import { colors　} from '../../global';

const StyledHome = styled.div`
    display: grid;
    grid-template-columns: 600px;
    grid-template-rows: auto;
    justify-content: center;
    font-size: xx-large;
    line-height: 2em;
    font-family: 'New Tegomin', serif;
    margin: 2em;

    .strong {
        color: ${colors.hotpink};
    }
`;

export default StyledHome;