import { Ng2Class2Page } from './app.po';

describe('ng2-class2 App', () => {
  let page: Ng2Class2Page;

  beforeEach(() => {
    page = new Ng2Class2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
