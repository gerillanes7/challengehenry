import CoursePreview from '../components/CoursePreview';
import Courses from '../components/Courses';
import SideBar from '../components/SideBar';
import { FirstColumn, SecondColumn, ThirdColumn, Grid } from '../styles/HomeStyles';

const Home = () => {
  return (
    <Grid>
      <FirstColumn>
        <SideBar />
      </FirstColumn>
      <SecondColumn >
        <Courses />
      </SecondColumn>
      <ThirdColumn>
        <CoursePreview />
      </ThirdColumn>
    </Grid>
  )
}

export default Home
