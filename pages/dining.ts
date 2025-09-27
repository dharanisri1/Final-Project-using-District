import {Page,expect} from '@playwright/test'
export class DiningPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto('https://www.district.in/');
    await expect(this.page).toHaveURL('https://www.district.in/');
 
  }
  async currentLocation() {
    await this.page.locator("svg[width='32']").click();
    await this.page.locator("img[src='https://b.zmtcdn.com/data/edition_assets/17436033389708.png']").click();
  }

  async searchRestaurant() {
    await this.page.getByRole('link', { name: 'Search for events, movies and' }).click();
    await this.page.getByRole('dialog').filter({ hasText: 'Search for events, movies,' }).getByRole('textbox').click();
    await this.page.getByRole('dialog').filter({ hasText: 'Search for events, movies,' }).getByRole('textbox').fill('guntur gongura');
    await this.page.getByRole('dialog').filter({ hasText: 'AllDiningEventsMoviesActivityTop results in Dining Guntur Gongura |' }).getByRole('textbox').press('Enter');
  }
  async selectRestaurant() {
    await this.page.getByRole('link', { name: 'GUNTUR GONGURA | Egatoor,' }).click();
  }
  async chooseGuestsAndBook() {
    await this.page.click('//span[text()="1 guest"]');
    await this.page.click('//div[text()="4 guests"]');
    await this.page.click('//button[text()="Book a table"]');
    await this.page.locator('xpath=//span[text()="Dinner"]').click();
  }
  async takeScreenshot() {
    const element = this.page.locator(
      'xpath=//div[contains(@class,"p-6 rounded-3xl bg-[var(--color-grey-50)]")]'
    );
    await element.screenshot({ path: 'Terms and Conditions.png' });
  }
}