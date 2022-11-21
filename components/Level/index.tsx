import { LevelContainer } from "./LevelStyles";

interface ILevel {
    level?: string;
}

const Level = ({level}: ILevel) => {
    return (
        <LevelContainer>
            {level}
        </LevelContainer>
    )
}

export default Level;