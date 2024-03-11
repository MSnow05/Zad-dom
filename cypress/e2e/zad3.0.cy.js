import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import LoginPage01 from '../pages/LoginPage01';
import HomePage01 from '../pages/HomePage01';


describe('User can visit GoIT page', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const loginPage01 = new LoginPage01();
  const homePage01 = new HomePage01();


    beforeEach('go to page', () => {
        loginPage.visit();
    });

    it('successfully login to the GoIT page first test', () => {
        loginPage.logInUser('user888@gmail.com', '1234567890');
        homePage.goToCourseHomepage();
        homePage.logOut();
    });

    it('successfully login to the GoIT page second test', () => {
        loginPage.logInUser('testowyqa@qa.team', 'QA!automation-1');
        homePage.goToCourseHomepage();
        homePage.logOut();
    });
});
