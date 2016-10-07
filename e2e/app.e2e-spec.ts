import { GuildsPage } from './app.po';

describe('guilds App', function() {
  let page: GuildsPage;

  beforeEach(() => {
    page = new GuildsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
