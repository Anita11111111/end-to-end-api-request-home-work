import { test as base } from '@playwright/test';
import { SettingsPage } from '../../src/pages/SettingsPage/SettingsPage';
import { ArticlesPage } from '../../src/pages/ArticlesPages/ArticlesPage';
import { ProfilePage } from '../../src/pages/ProfilePage/ProfilePage';

type PageFixtures = {
    settingsPage: SettingsPage
    articlePage: ArticlesPage
    profilePage: ProfilePage

}

export const test = base.extend<PageFixtures>({
    settingsPage: async ({page}, use) => {
        await use(new SettingsPage(page))
    },

    articlePage: async({page}, use) => {
        await use(new ArticlesPage(page))
    },
    profilePage: async({page}, use) => {
        await use(new ProfilePage(page))
    }


}) 