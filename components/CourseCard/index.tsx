
import { useContext } from 'react'
import CourseContext from '../../Context/CourseContext';
import { Course } from '../../interfaces/course'
import Level from '../Level';
import Votes from '../Votes';
import { CardContainer, ImageContainer, CardContentContainer, CardTitle, CardDescription, CardInfo } from "./CourseCardStyles";

interface ICourseCard {
    course: Course
}

const CourseCard = ({ course }: ICourseCard) => {

    const { setCourse } = useContext(CourseContext)

    const { title, description, rating, reviews, level } = course;

    return (
        <CardContainer onClick={() => setCourse(course)}>
            <ImageContainer />
            <CardContentContainer>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                <CardInfo>
                    <Votes value={rating} reviews={reviews} />
                    <Level level={level} />
                </CardInfo>
            </CardContentContainer>
        </CardContainer>
    )
}

export default CourseCard;