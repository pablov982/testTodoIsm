import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
    private readonly page                : Page;
    private readonly requestAccountBtn   : Locator;
    private readonly userField           : Locator;
    private readonly successToastMessage : Locator;
    private readonly signInButton        : Locator;

    constructor(page: Page) {
        this.page                = page;
        this.requestAccountBtn    = this.page.getByText('Get a test account');
        this.userField            = this.page.getByPlaceholder('Username');
        this.successToastMessage  = this.page.locator('#toast-container').getByText('Generate success.');
        this.signInButton         = this.page.locator('#login-btn');
    }

    requestTestAccount = async (): Promise<void> => {
        await this.requestAccountBtn.click();
    }
    
    waitForAccountReady = async (): Promise<string> => {
        await expect(this.successToastMessage).toHaveText('Generate success.');
        return await this.userField.inputValue();
    }
    
    submitLogin = async (): Promise<void> => {
        await this.signInButton.click();
    }
}