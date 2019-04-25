import { createMovieService } from './movieService';

import MockFirebase from 'mock-cloud-firestore';
import { logAction } from './logAction';
import * as data from './movies.json';

export async function useMockDB (): Promise<firebase.firestore.Firestore> {
  const dbClient = new MockFirebase().firestore();
  const movieService = createMovieService(dbClient);
  if (movieService.isEmpty()) {
    await logAction('Uploading to DB', 'Data has been uploaded', () => movieService.upload(data));
  }

  return dbClient;
}

export async function upload(dbClient: firebase.firestore.Firestore) {
  const movieService = createMovieService(dbClient);
  if (movieService.isEmpty()) {
    await logAction('Uploading to DB', 'Data has been uploaded', () => movieService.upload(data as any));
  }

  return dbClient;
}