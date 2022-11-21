import { createContext } from "react";
import { Course } from "../interfaces/course";

export type CourseContextType = {
    course: Course,
    setCourse: (course: Course) => void;
}

const CourseContext = createContext<CourseContextType>({
    course: {
        title: '',
        description: '',
        rating: 0,
        reviews: 0,
        image: '',
        professional: {
            name: '',
            lastname: '',
            profession: ''
        },
        chapters: [{
            description: '',
            duration: '',
            image: '',
            title: ''
        }],
        level: ''
    },
    setCourse: () => {}
})

export default CourseContext;