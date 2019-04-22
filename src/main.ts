import { createMovieService } from "./movieService";
import { createDbClient } from "./dbClient";
import { writeFileSync } from "fs";
import { DbConfig } from "./dbConfig";
import { logAction } from "./logAction";

const dbConfig = {
  apiKey: process.env.MOVIES_API_KEY2, // TODO: guide people to register their own firebase instance and add to an env var
  authDomain: "movies-40b57.firebaseapp.com",
  databaseURL: "https://movies-40b57.firebaseio.com",
  projectId: "movies-40b57",
  storageBucket: "movies-40b57.appspot.com",
  messagingSenderId: "719611461160"
};

/* Main code */
download(dbConfig, 'movies.json').then(() => process.exit());

async function download(dbConfig: DbConfig, path: string) {
  const movieService = createMovieService(createDbClient(dbConfig));
  const data = await movieService.download();
  await logAction('Downloading DB', `Data has been downloaded to '${path}'.`, () => writeFileSync(path, JSON.stringify(data)));
}