import { test } from '@playwright/test';
import { IntroPage } from '../pages/intro.page';
import { LoginPage } from '../pages/login.page';
import { TaskManagerPage } from '../pages/app.page';

test.describe('Task Manager Test Suite', () => {

  const sampleTask = 'Buy milk';

  test.beforeEach(async ({ page }) => {
    test.slow();

    const introScreen = new IntroPage(page);
    const loginScreen = new LoginPage(page);

    await introScreen.navigateToPage();
    await introScreen.selectLoginOption();

    await loginScreen.requestTestAccount();
    await loginScreen.waitForAccountReady();
    await loginScreen.submitLogin();
  });

  test('Add a new task', async ({ page }) => {
    test.slow();

    const taskPage = new TaskManagerPage(page);

    await taskPage.waitForAppLoad();
    await taskPage.addTask(sampleTask);

    await taskPage.verifyTaskAdded(sampleTask);

    await page.screenshot({ path: `screenshots/new-task.png` });
  });

  test('Mark a task as complete', async ({ page }) => {
    test.slow();

    const taskPage = new TaskManagerPage(page);

    await taskPage.waitForAppLoad();
    await taskPage.addTask(sampleTask);
    await taskPage.markTaskAsDone(sampleTask);

    await taskPage.verifyTaskCompleted(sampleTask);

    await page.screenshot({ path: `screenshots/task-done.png` });
  });

  test('Remove completed tasks', async ({ page }) => {
    test.slow();

    const taskPage = new TaskManagerPage(page);

    await taskPage.waitForAppLoad();
    await taskPage.addTask(sampleTask);
    await taskPage.markTaskAsDone(sampleTask);
    await taskPage.removeCompletedTasks();

    await taskPage.verifyTaskRemoved(sampleTask);

    await page.screenshot({ path: `screenshots/cleared-task.png` });
  });

});