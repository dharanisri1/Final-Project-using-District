import {test} from '@playwright/test'
import {MoviesPage} from '../pages/movies.ts'
import {ActivitiesPage} from '../pages/activity.ts'
import { DiningPage } from '../pages/dining.ts';
 
 
test('test1 - Movies Filters', async ({ page }) => {
  const moviesPage = new MoviesPage(page);
  await moviesPage.goto();
  await moviesPage.openMoviesSection();
  await moviesPage.applyLanguageFilter();
  await moviesPage.logLanguages();
});
 
test('test2 - Activities Filters', async ({ page }) => {
  const activitiesPage = new ActivitiesPage(page);
  await activitiesPage.goto();
  await activitiesPage.openActivitiesSection();
  await activitiesPage.applyFilters();
  await activitiesPage.logActivityNames();
});
 
test('test3 - Dining Booking', async ({ page }) => {
  const diningPage = new DiningPage(page);
  await diningPage.goto();
  await diningPage.currentLocation();
  await diningPage.searchRestaurant();
  await diningPage.selectRestaurant();
  await diningPage.chooseGuestsAndBook();
  await diningPage.takeScreenshot();
});