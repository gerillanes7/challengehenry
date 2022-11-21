import styled from "styled-components";
import Rating from '@mui/material/Rating';


export const RatingVotes = styled(Rating)`
    margin-right: 5px;
`

export const VotesContainer = styled.div`
    display: flex;
    align-items: center;
`

export const RatingLabel = styled.span`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    margin-right: 5px;
`

export const ReviewsLabel = styled.span`
    font-family: 'Lato', sans-serif;
    color: #A4A4A4;
    font-size: 10px;
`