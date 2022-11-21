import { useQuery } from "react-query"
import { data } from "../../db/db"
import { Course } from "../../interfaces/course"

export const useGetCourses = () => {
    const query = useQuery<Course[], never>({ queryKey: ['courses'], queryFn: () => data, refetchOnWindowFocus: false })

    return {
        courses: query.data,
        error: query.error,
        loading: query.isLoading
    }
}

