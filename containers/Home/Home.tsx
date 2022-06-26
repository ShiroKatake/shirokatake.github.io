import { Grid } from '../../components';
import { StyledRow, StyledCol } from './Home.styled';

export const Home:React.FC = () => {
  return (
    <Grid>
      <StyledRow center='xs'>
        <StyledCol>
          <h1>Projects</h1>
          <p>Check out my best works!</p>
        </StyledCol>
      </StyledRow>
    </Grid>
  );
};
