import { BasePage } from "../BasePage";
import { ProfilePageLocators } from "./ProfilePageLocators";

export class ProfilePage extends BasePage {
    readonly locators: ProfilePageLocators = new ProfilePageLocators(this.page)


}