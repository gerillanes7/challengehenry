import { useGetCourses } from "../../hooks/useGetCourses"
import CourseCard from "../CourseCard";
import FilterButton from "../FilterButton";
import FlagButton from "../FlagButton";
import SearchButton from "../SearchButton"
import { Container, TitleAndSearchContainer, Title, LanguagesContainer } from "./CoursesStyles"

const Courses = () => {

    const { courses, error, loading } = useGetCourses();

    const languages = [
        'English',
        'Chinese',
        'French',
        'Spanish'
    ]

    if(loading) {
        return (
            <div>
                <h1>
                    Loading....
                </h1>
            </div>
        )
    }

    if(error) {
        return (
            <div>
                <h1>
                    Error
                </h1>
            </div>
        )
    }

    return (
        <Container>
            <TitleAndSearchContainer>
                <Title>Courses</Title>
                <SearchButton />
            </TitleAndSearchContainer>
            <LanguagesContainer>
                {languages.map((lang, i) => (
                    <FlagButton key={i} language={lang} />
                ))}
                <FilterButton />
            </LanguagesContainer>
            {
                courses?.map((course, i) => (
                    <CourseCard key={i} course={course} />
                ))
            }
        </Container>
    )
}

export default Courses