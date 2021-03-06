import { AppPage } from './app.po';

describe('angular-cv App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('Papa Djadji Gueye | Software Engineer');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Papa Djadji Gueye'.toUpperCase());
  });
});
