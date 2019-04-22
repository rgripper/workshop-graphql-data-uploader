import { useMockDb } from "../src";

test("useMockDb should upload data to a mocked firestore", async () => {
  const dbClient = await useMockDb();
  const moviesRef = dbClient.collection('movies');
  expect((await moviesRef.get()).empty).toBe(false);
})