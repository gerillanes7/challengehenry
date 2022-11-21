import { useState } from 'react'
import { Course } from '../interfaces/course'
import CourseContext from './CourseContext'

interface ICourseProvider {
    children: JSX.Element
}

const CourseProvider = ({children}: ICourseProvider) => {
    const [course, setCourse] = useState<Course>({
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
    })

    return (
        <CourseContext.Provider value={{course, setCourse}}>
            {children}
        </CourseContext.Provider>
    )
}

export default CourseProvider