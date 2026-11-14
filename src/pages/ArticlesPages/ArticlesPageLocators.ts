import {Locator} from '@playwright/test'
import { BaseLocator } from "../BaseLocator";

export class ArticlePageLocators extends BaseLocator{
    readonly avatarField: Locator = this.page.getByTestId('settings-avatar-preview').locator('img')
}

