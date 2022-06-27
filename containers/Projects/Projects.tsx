import { Grid } from '../../components';
import { StyledRow, StyledCol } from './Projects.styled';

export const Projects:React.FC = () => {
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
