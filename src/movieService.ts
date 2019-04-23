import { firestore } from 'firebase';

export function createMovieService (dbClient: firestore.Firestore) {
  const moviesRef = dbClient.collection("movies");
  const keywordsRef = dbClient.collection("keywords");

  return {
    async download() {
      return {
        movies: (await moviesRef.get()).docs.map(x => x.data()),
        keywords: (await keywordsRef.get()).docs.map(x => x.data()),
      }
    },

    async upload({ movies, keywords }: { movies: { id: string }[], keywords: { id: string }[] }) {
      movies.forEach(x => moviesRef.doc(x.id).set(x));
      keywords.forEach(x => keywordsRef.doc(x.id).set(x));
    },

    async clear() {
      await moviesRef.get().then(x => x.forEach(doc => doc.ref.delete()));
      await keywordsRef.get().then(x => x.forEach(doc => doc.ref.delete()));
    },

    async isEmpty() {
      return moviesRef.get().then(x => x.empty);
    },
  }
}