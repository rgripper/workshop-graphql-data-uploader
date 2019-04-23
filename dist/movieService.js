"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createMovieService(dbClient) {
    const moviesRef = dbClient.collection("movies");
    const keywordsRef = dbClient.collection("keywords");
    return {
        async download() {
            return {
                movies: (await moviesRef.get()).docs.map(x => x.data()),
                keywords: (await keywordsRef.get()).docs.map(x => x.data()),
            };
        },
        async upload({ movies, keywords }) {
            movies.forEach(x => moviesRef.add(x));
            keywords.forEach(x => keywordsRef.add(x));
        },
        async clear() {
            await moviesRef.get().then(x => x.forEach(doc => doc.ref.delete()));
            await keywordsRef.get().then(x => x.forEach(doc => doc.ref.delete()));
        },
        async isEmpty() {
            return moviesRef.get().then(x => x.empty);
        },
    };
}
exports.createMovieService = createMovieService;
