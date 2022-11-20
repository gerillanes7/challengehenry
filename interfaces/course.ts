import { Chapter } from "../types/chapter";
import { Professional } from "../types/professional";

export interface Course {
    title: string;
    description: string;
    rating: number;
    reviews: number;
    image: string;
    professional: Professional;
    chapters: Chapter[];
    level: string;
}