import {AppRoutingModule} from './app-routing.module';

describe('AppRoutingModule', () => {
  let navbarRoutingModule: AppRoutingModule;

  beforeEach(() => {
    navbarRoutingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(navbarRoutingModule).toBeTruthy();
  });
});
