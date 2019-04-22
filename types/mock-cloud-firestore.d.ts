import { firestore } from "firebase";

declare class MockFirebase  {
  firestore (): firestore.Firestore
}

export default MockFirebase