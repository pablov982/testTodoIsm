import { Page, Locator, expect } from "@playwright/test";

export class TaskManagerPage {
    private readonly page      : Page;
    private readonly inputField: Locator;
    private readonly taskList  : Locator;
    private readonly resetBtn  : Locator;

    constructor(page: Page) {
        this.page       = page;
        this.inputField = this.page.locator('#item-input');
        this.taskList   = this.page.locator('.items');
        this.resetBtn   = this.page.locator('#clear-btn');
    }

    waitForAppLoad = async () => {
        await expect(this.inputField).toBeVisible();
    }

    addTask = async (taskName: string) => {
        await this.inputField.click();
        await this.inputField.pressSequentially(taskName);
        await this.inputField.press('Enter');
    }

    markTaskAsDone = async (taskName: string) => {
        const taskToggle = this.page.locator(`//span[@class = "item-body" and contains(.,"${taskName}")]/a/i`);
        await taskToggle.click();
    }

    removeCompletedTasks = async () => {
        await this.resetBtn.click();
    }

    verifyTaskAdded = async (taskName: string) => {
        await expect(this.taskList.getByText(taskName)).toHaveClass('active-item');
    }

    verifyTaskCompleted = async (taskName: string) => {
        await expect(this.taskList.getByText(taskName)).toHaveClass('inactive-item');
    }

    verifyTaskRemoved = async (taskName: string) => {
        await expect(this.taskList).not.toHaveText(taskName);
    }
}