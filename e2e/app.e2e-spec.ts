import { TgActivitiesPage } from './app.po';

describe('tg-activities App', function() {
  let page: TgActivitiesPage;

  beforeEach(() => {
    page = new TgActivitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
