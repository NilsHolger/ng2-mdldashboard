import { MdldashboardPage } from './app.po';

describe('mdldashboard App', function() {
  let page: MdldashboardPage;

  beforeEach(() => {
    page = new MdldashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
