import {Locator} from "@playwright/test"
import { BaseLocator  } from "../BaseLocator"

export class SettingsPageLocators extends BaseLocator {
    readonly usernameInputField: Locator = this.page.getByTestId('settings-username')
    readonly emailInputField: Locator = this.page.getByTestId('settings-email')
    readonly imageInputField: Locator = this.page.getByTestId('settings-image')
    readonly submitButton: Locator = this.page.getByTestId('settings-submit')


}