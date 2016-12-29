import { ZorroDoorPage } from './app.po';

describe('zorro-door App', function() {
  let page: ZorroDoorPage;

  beforeEach(() => {
    page = new ZorroDoorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
