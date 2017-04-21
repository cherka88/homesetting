import { HomesettingPage } from './app.po';

describe('homesetting App', () => {
  let page: HomesettingPage;

  beforeEach(() => {
    page = new HomesettingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
