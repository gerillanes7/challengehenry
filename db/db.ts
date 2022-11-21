import { Course } from "../interfaces/course";

export const data: Course[] = [
    {
        title: 'Course 1',
        description: 'This course discusses the main units and principles of the human nervous system that underlie out language',
        rating: 5,
        reviews: 100,
        image: '',
        professional: {
            name: 'German',
            lastname: 'Illanes',
            profession: 'The best react developer of the world'
        },
        chapters: [{
            description: 'chapter description',
            duration: '3:23',
            image: '',
            title: 'Chapter 1'
        }],
        level: 'All levels'
    },
    {
        title: 'Course 2',
        description: 'This course discusses the main units and principles of the human nervous system that underlie out language',
        rating: 3,
        reviews: 1002,
        image: '',
        professional: {
            name: 'German',
            lastname: 'Illanes',
            profession: 'The best react developer of the world'
        },
        chapters: [{
            description: 'chapter description',
            duration: '3:23',
            image: '',
            title: 'Chapter 1'
        }],
        level: 'Intermediate'
    }
]