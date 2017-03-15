import { ChatProjectPage } from './app.po';

describe('chat-project App', function() {
  let page: ChatProjectPage;

  beforeEach(() => {
    page = new ChatProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
