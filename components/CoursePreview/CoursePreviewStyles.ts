import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: repeat(12, minmax(0, 1fr));
    gap: 20px;
`

export const VideoContainer = styled.div`
    grid-row: span 5 / span 5;
    background-color: #333;
    border-radius: 10px;
`

export const DescriptionContainer = styled.div`
    grid-row: span 3 / span 3;
`

export const VotesAndReviewsContainer = styled.div`
    display: flex;
    width: 35%;
    justify-content: space-between;
`

export const DescriptionLabel = styled.h3`
    font-size: 28px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    margin: 10px 0px 10px 0px;
`

export const DescriptionParagraph = styled.p`
    font-size: 16px;
    font-family: 'Lato', sans-serif;
`

export const ProfessionalContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`

export const ProfessionaImage = styled.div`
    width: 50px;
    height: 50px;
    background-color: #333;
    border-radius: 50%;
`

export const ProfessionalInfoContainer = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`
export const ProfessionalDataLabel = styled.span`
    font-weight: 600;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    margin-bottom: 5px;
`

export const ProfessionalProfessionLabel = styled.span`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
`

export const ChaptersContainer = styled.div`
    grid-row: span 4 / span 4;
`

export const ChaptersTitlesContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ChapterContainerTitle = styled.h3`
    font-size: 25px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
`

export const CounterTitle = styled.h3`
    font-size: 23px;
    font-weight: 500;
    font-family: 'Lato', sans-serif;
    color: #bdbdbd;
`