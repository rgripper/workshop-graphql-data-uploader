"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("firebase"));
function createDbClient(config) {
    const app = firebase.initializeApp(config);
    return firebase.firestore(app);
}
exports.createDbClient = createDbClient;
