import { Page, Locator } from "@playwright/test";

export class IntroPage {
    private readonly page: Page;
    private readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = this.page
                            .getByRole('navigation')
                            .getByRole('link', { name: 'Login' });
    }

    navigateToPage = async () => {
        await this.page.goto('http://127.0.0.1:5000/#intro');
    }

    selectLoginOption = async () => {
        await this.loginLink.click();
    }
}