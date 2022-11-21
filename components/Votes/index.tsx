import Rating from '@mui/material/Rating';
import { VotesContainer, ReviewsLabel, RatingLabel, RatingVotes } from './VotesStyles';

interface IVotes {
    value: number;
    reviews: number;
}

const Votes = ({ value, reviews }: IVotes) => {
    return (
        <VotesContainer>
            <RatingVotes value={value} readOnly/>
            <RatingLabel>
                {value}
            </RatingLabel>
            <ReviewsLabel>
                ({reviews})
            </ReviewsLabel>
        </VotesContainer>
    )
}
export default Votes