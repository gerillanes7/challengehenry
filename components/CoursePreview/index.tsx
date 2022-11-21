import { useContext } from 'react'

import CourseContext from "../../Context/CourseContext";
import Level from '../Level';
import Votes from '../Votes';

import { 
    Container, 
    VideoContainer, 
    DescriptionContainer, 
    ChaptersContainer, 
    VotesAndReviewsContainer, 
    DescriptionLabel, 
    DescriptionParagraph, 
    ProfessionalContainer,
    ProfessionaImage,
    ProfessionalInfoContainer,
    ProfessionalDataLabel,
    ProfessionalProfessionLabel,
    ChaptersTitlesContainer,
    ChapterContainerTitle,
    CounterTitle
} from "./CoursePreviewStyles"

const CoursePreview = () => {

    const { course } = useContext(CourseContext)

    const { title, description, rating, reviews, level, professional, chapters } = course;

    return (
        <Container>
            <VideoContainer>

            </VideoContainer>
            <DescriptionContainer>
                <VotesAndReviewsContainer>
                    <Votes value={rating} reviews={reviews}/>
                    <Level level={level} />
                </VotesAndReviewsContainer>
                <DescriptionLabel>
                    {title}
                </DescriptionLabel>
                <DescriptionParagraph>
                    {description}
                </DescriptionParagraph>
                <ProfessionalContainer>
                    <ProfessionaImage />
                    <ProfessionalInfoContainer>
                        <ProfessionalDataLabel>
                            {`${professional.name} ${professional.lastname}`}
                        </ProfessionalDataLabel>
                        <ProfessionalProfessionLabel>
                            {professional.profession}
                        </ProfessionalProfessionLabel>
                    </ProfessionalInfoContainer>
                </ProfessionalContainer>
            </DescriptionContainer>
            <ChaptersContainer>
                <ChaptersTitlesContainer>
                    <ChapterContainerTitle>
                        Courses content
                    </ChapterContainerTitle>
                    <CounterTitle>
                        {chapters.length} lectures
                    </CounterTitle>
                </ChaptersTitlesContainer>
            </ChaptersContainer>
        </Container>
    )
}

export default CoursePreview
