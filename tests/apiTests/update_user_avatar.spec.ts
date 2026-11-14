import { faker } from '@faker-js/faker';
import { test, expect } from '../fixtures/base-fixtures';
import { UserController } from '../../src/controllers/UserController';
import { paths } from '../../src/constants/paths';

test.describe('Update user avatar', () => {
    const email = faker.internet.email();
    const username =  faker.internet.username();
    const password = '123456';
    const image = faker.image.avatar()

    test.use({ userData: { user: { username, email, password } } })


test('new user registration', async({ createNewUser, newUserToken, authorizeBrowserAsNewUser, settingsPage,  articlePage, profilePage, page, request}) => {
     const userController = new UserController(request)
    expect(createNewUser.email).toEqual(email)
    expect(createNewUser.username).toEqual(username)

    const token = createNewUser.token
    expect(token.length).toBeGreaterThan(0)

    const loginToken = await userController.loginAsUser(email, password)
    expect(loginToken.length).toBeGreaterThan(0)

     await page.goto(paths.articles) 
     const userLink = page.getByRole('link', { name: username });
    await expect(userLink).toBeVisible();   // wait until the user is loaded
    await userLink.click();  
    
    await page.getByRole('link', { name: 'Edit profile' }).click();
    await expect(page).toHaveURL(paths.settings);
   
    
    await expect(settingsPage.locators.usernameInputField).toHaveValue(username)
    await expect(settingsPage.locators.emailInputField).toHaveValue(email)
    settingsPage.changeAvatar(image)
     await expect(articlePage.locators.avatarField).toHaveAttribute('src', image)

     await page.reload()
     await userLink.click();
     await profilePage.locators.editProfileButton.click()
     await expect(settingsPage.locators.imageInputField).toHaveValue(image)
     await expect(articlePage.locators.avatarField).toHaveAttribute('src', image)

})
    
})

