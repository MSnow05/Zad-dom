import LoginPage from './pages/LoginPage01';
import HomePage from './pages/HomePage01';

describe('User can visit Example page', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    beforeEach('go to page', () => {
        loginPage.visit();
    });

    it('successfully login to the Example page', () => {
        loginPage.logInUser('test@example.com', 'password123');
        homePage.goToCourseHomepage();
        homePage.logOut();
    });
});
