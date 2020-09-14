import { Angulardemo04Page } from './app.po';

describe('angulardemo04 App', () => {
  let page: Angulardemo04Page;

  beforeEach(() => {
    page = new Angulardemo04Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
