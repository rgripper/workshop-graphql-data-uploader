import ora = require("ora");

export async function logAction(startText: string, endText: string, action: () => unknown) {
  const spinner = ora();
  spinner.start(startText);
  await action();
  spinner.stop();
  console.info(endText);
}