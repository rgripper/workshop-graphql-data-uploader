"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const movieService_1 = require("./movieService");
const mock_cloud_firestore_1 = __importDefault(require("mock-cloud-firestore"));
const logAction_1 = require("./logAction");
const data = __importStar(require("./movies.json"));
async function useMockDb() {
    const dbClient = new mock_cloud_firestore_1.default().firestore();
    const movieService = movieService_1.createMovieService(dbClient);
    if (movieService.isEmpty()) {
        await logAction_1.logAction('Uploading to DB', 'Data has been uploaded', () => movieService.upload(data));
    }
    return dbClient;
}
exports.useMockDb = useMockDb;
async function upload(dbClient) {
    const movieService = movieService_1.createMovieService(dbClient);
    if (movieService.isEmpty()) {
        await logAction_1.logAction('Uploading to DB', 'Data has been uploaded', () => movieService.upload(data));
    }
    return dbClient;
}
exports.upload = upload;
