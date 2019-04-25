import { useMockDB } from "../src";

test("useMockDB should upload data to a mocked firestore", async () => {
  const dbClient = await useMockDB();
  const moviesRef = dbClient.collection('movies');
  expect((await moviesRef.get()).empty).toBe(false);
})