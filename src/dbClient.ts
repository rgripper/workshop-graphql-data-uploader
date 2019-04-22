import * as firebase from "firebase";
import { DbConfig } from "./dbConfig";

export function createDbClient (config: DbConfig) {
  const app = firebase.initializeApp(config);
  return firebase.firestore(app);
}