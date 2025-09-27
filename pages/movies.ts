import {Page,expect} from '@playwright/test'
export class MoviesPage {
  readonly page: any;
  constructor(page: any) { 
    this.page = page;
  }
 
  async goto() {
    await this.page.goto('https://www.district.in/',{ waitUntil: 'load', timeout: 60000 });
 
  }
 
  async openMoviesSection() {
    await this.page.locator("//div[@class='dds-hidden md:dds-flex dds-items-center']//a[@class='md:dds-px-2 dds-py-2 dds-flex dds-flex-col dds-gap-1 dds-rounded-lg dds-justify-center dds-items-center sm:dds-rounded-full dds-font-semibold dds-text-base dds-cursor-pointer md:dds-min-w-[72px] dds-transition-all dds-duration-200 dds-ease-in-out dds-shadow-none dds-no-underline false'][normalize-space()='Movies']").click();
    await expect.soft(this.page).toHaveURL('https://www.district.in/movies/')
  }
 
  async applyLanguageFilter() {
    await this.page.click('//span[text()="Filters"]');
    await this.page.click('//span[text()="Language"]');
  }
 
  async logLanguages() {
    const elements = await this.page.$$('//span[contains(@class,"dds-text-base dds-font-semibold dds-text-primary dds-leading-normal")]');
    for (const [index, element] of elements.entries()) {
      const text = await element.textContent();
      console.log(`Language ${index + 1}: ${text?.trim()}`);
    }
  }
}