import { DemoproPage } from './app.po';

describe('demopro App', () => {
  let page: DemoproPage;

  beforeEach(() => {
    page = new DemoproPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
