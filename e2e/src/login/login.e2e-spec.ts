import { LoginPage } from './login.po';

describe('workspace-project Login', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('must navigate to login', () => {
    page.navigateToLogin();

    expect(page.getButtonText()).toEqual('Entrar');
  });

  it('must complete the form with an invalid user', () => {
    page.getEmailInput().sendKeys('user@teste.com');
    page.getPasswordInput().sendKeys('2123');

    expect(page.getEmailInput().getAttribute('value')).toEqual('user@teste.com');
    expect(page.getPasswordInput().getAttribute('value')).toEqual('2123');
  });

  it('must click the button and check the error message', () => {
    page.getButton().click();
    page.wait();

    expect(page.getTextUserInvalid()).toEqual('Usuário e/ou senha inválidos');
  });

  it('must complete the form with an valid user', () => {
    page.getEmailInput().clear();
    page.getPasswordInput().clear();

    page.getEmailInput().sendKeys('testeum@teste.com');
    page.getPasswordInput().sendKeys('123456');

    expect(page.getEmailInput().getAttribute('value')).toEqual('testeum@teste.com');
    expect(page.getPasswordInput().getAttribute('value')).toEqual('123456');
  });

  it('must click the button and go to home', () => {
    page.getButton().click();
    page.wait();

    expect(page.getUrl()).toEqual('http://localhost:4200/');
  });
});

export default () => {
  let page = new LoginPage();
  page.getEmailInput().sendKeys('testeum@teste.com');
  page.getPasswordInput().sendKeys('123456');
  page.getButton().click();
  page.wait();
}