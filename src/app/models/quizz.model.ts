import { User } from './user.model';
import { Question } from './question.model';

export interface Quiz {
    id: string;
    name: string;
    questions: Question[];
    author: User;
}
