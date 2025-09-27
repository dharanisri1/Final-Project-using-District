import {Page,expect} from '@playwright/test'
export class ActivitiesPage {
  readonly page: Page;
  constructor(page: Page) { this.page = page; }
 
  async goto() {
    await this.page.goto('https://www.district.in/'); 
   
  }
 
  async openActivitiesSection() {
    await this.page.locator("//div[contains(@class,'dds-hidden md:dds-flex dds-items-center')]//a[contains(@class,'md:dds-px-2 dds-py-2 dds-flex dds-flex-col dds-gap-1 dds-rounded-lg dds-justify-center dds-items-center sm:dds-rounded-full dds-font-semibold dds-text-base dds-cursor-pointer md:dds-min-w-[72px] dds-transition-all dds-duration-200 dds-ease-in-out dds-shadow-none dds-no-underline false')][normalize-space()='Activities']").click();
    await expect.soft(this.page).toHaveURL('https://www.district.in/activities/');
  }
 
  async applyFilters() {
    await this.page.click('//span[text()="Filters"]');
    await this.page.waitForSelector('//label[text()="Price : Low to High"]', { state: 'visible' });
    await this.page.locator('//label[text()="Price : Low to High"]').click();
    await this.page.click('//span[text()="Apply Filters"]');
    await this.page.click('//span[text()="This Weekend"]');
  }
 
  async logActivityNames() {
    await this.page.waitForSelector('//h5[contains(@class,"dds-tracking-tight dds-text-lg dds-font-semibold dds-overflow-hidden dds-whitespace-normal dds-line-clamp-2 dds-text-primary dds-my-0")]');
    const elements = await this.page.$$('//h5[contains(@class,"dds-tracking-tight dds-text-lg dds-font-semibold dds-overflow-hidden dds-whitespace-normal dds-line-clamp-2 dds-text-primary dds-my-0")]');
    for (const [index, element] of elements.slice(0, 5).entries()) {
      if (await element.isVisible()) {
        const text = await element.textContent();
        expect.soft(text?.trim().length).toBeGreaterThan(0);
        console.log(`Activity ${index + 1}: ${text?.trim()}`);
      }
    }
  }
}