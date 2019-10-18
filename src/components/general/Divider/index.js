import styled from 'styled-components';

const Divider = styled.div`
  clip-path: polygon(
    /* left top */ 0 0,
    /* right top */ 100% 20vw,
    /* right bottom */ 100% calc(100% - 20vw),
    /* left bottom */ 0 100%
  );
  background: ${props => props.theme.colors.background};
  height: 350px;
`;

export default Divider;
