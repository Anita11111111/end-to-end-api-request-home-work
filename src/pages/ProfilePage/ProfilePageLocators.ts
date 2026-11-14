import {Locator} from "@playwright/test"
import {BaseLocator} from "../BaseLocator"

export class ProfilePageLocators extends BaseLocator {
    readonly editProfileButton: Locator = this.page.getByRole('link', { name: 'Edit profile' })

}
