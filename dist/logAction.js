"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ora = require("ora");
async function logAction(startText, endText, action) {
    const spinner = ora();
    spinner.start(startText);
    await action();
    spinner.stop();
    console.info(endText);
}
exports.logAction = logAction;
