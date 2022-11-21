import FlagChina from "../Flags/FlagChina"
import FlagFrance from "../Flags/FlagFrance"
import FlagSpain from "../Flags/FlagSpain"
import FlagUk from "../Flags/FlagUk"
import { FlagButtonContainer, FlagContainer, LanguageLabel } from "./FlagButtonStyles"

interface IFlagButton  {
    language: string;
}

const FlagButton = ({language}: IFlagButton) => {

    const flagOptions = {
        'English': <FlagUk />,
        'Spanish': <FlagSpain />,
        'French': <FlagFrance />,
        'Chinese': <FlagChina />
    }

    return (
        <FlagButtonContainer>
            <FlagContainer>
                {flagOptions[language as keyof typeof flagOptions]}
            </FlagContainer>
            <LanguageLabel>
                {language}
            </LanguageLabel>
        </FlagButtonContainer>
    )
}

export default FlagButton