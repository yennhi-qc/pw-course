import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" text
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Expects page contains a heading tag with the following content:
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
