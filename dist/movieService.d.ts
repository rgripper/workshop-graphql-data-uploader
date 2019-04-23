import { firestore } from 'firebase';
export declare function createMovieService(dbClient: firestore.Firestore): {
    download(): Promise<{
        movies: firestore.DocumentData[];
        keywords: firestore.DocumentData[];
    }>;
    upload({ movies, keywords }: {
        movies: {
            id: string;
        }[];
        keywords: {
            id: string;
        }[];
    }): Promise<void>;
    clear(): Promise<void>;
    isEmpty(): Promise<boolean>;
};
