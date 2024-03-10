import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

describe('User can visit GoIT page', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();

    beforeEach('go to page', () => {
        loginPage.visit();
    });

    it('successfully login to the GoIT page first test', () => {
        loginPage.logInUser('user888@gmail.com', '1234567890');
        homePage.goToCourseHomepage();
        homePage.logOut();
    });
});
