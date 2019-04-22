import { DbConfig } from './dbConfig';
import { createMovieService } from './movieService';
import { readFileSync } from 'fs';
import { createDbClient } from './dbClient';
import { resolve } from 'path';

import MockFirebase from 'mock-cloud-firestore';
import { logAction } from './logAction';
import * as data from './movies.json';

export async function useMockDb (): Promise<firebase.firestore.Firestore> {
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