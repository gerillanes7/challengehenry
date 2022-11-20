import Courses from '../components/Courses';
import SideBar from '../components/SideBar';
import { FirstColumn, SecondColumn, ThirdColumn, GridContainer } from '../styles/HomeStyles';

const Home = () => {
  return (
    <GridContainer container spacing={2}>
      <FirstColumn item lg={1} xl={1}>
        <SideBar />
      </FirstColumn>
      <SecondColumn item lg={5} xl={5}>
        <Courses />
      </SecondColumn>
      <ThirdColumn item lg={6} xl={6}>
        das
      </ThirdColumn>
    </GridContainer>
  )
}

export default Home
