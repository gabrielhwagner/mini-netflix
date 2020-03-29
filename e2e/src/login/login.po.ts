import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateToLogin() {
    return browser.get('/login');
  }

  getButtonText() {
    return element(by.css('button')).getText() as Promise<string>;
  }

  getButton() {
    return element(by.css('button'));
  }

  getEmailInput() {
    return element(by.xpath('/html/body/app-root/main/div/app-login/div/div/form/div/div[1]/input'));
  }

  getPasswordInput() {
    return element(by.xpath('/html/body/app-root/main/div/app-login/div/div/form/div/div[2]/input'));
  } 

  getTextUserInvalid() {
    return element(by.css('.user-not-found')).getText();
  }

  wait() {
    browser.sleep(2000);
  }

  getUrl() {
    return browser.getCurrentUrl();
  }
}
