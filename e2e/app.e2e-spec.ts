import { AppPage } from './app.po';

describe('prueba App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app! xxx:app.e2e-spect.ts');
  });
});
