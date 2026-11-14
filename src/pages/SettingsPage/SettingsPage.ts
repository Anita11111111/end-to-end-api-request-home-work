import { paths } from '../../constants/paths';
import {BasePage} from '../BasePage'
import {SettingsPageLocators} from './SettingsPageLocators'

export class SettingsPage extends BasePage {
    readonly locators: SettingsPageLocators = new SettingsPageLocators(this.page)

    async changeAvatar(url: string) {
        await this.locators.imageInputField.clear()
        await this.locators.imageInputField.fill(url)
        await this.locators.submitButton.click()
    }


}



