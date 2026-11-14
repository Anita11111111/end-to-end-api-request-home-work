import {BasePage} from "../BasePage"
import { ArticlePageLocators } from "./ArticlesPageLocators"    

export class ArticlesPage extends BasePage {
    readonly locators: ArticlePageLocators = new ArticlePageLocators(this.page)
}