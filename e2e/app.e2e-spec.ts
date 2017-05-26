import { BlogManagementPage } from './app.po';

describe('blog-management App', function() {
  let page: BlogManagementPage;

  beforeEach(() => {
    page = new BlogManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
