import { NavbarRoutingModule } from './navbar-routing.module';

describe('NavbarRoutingModule', () => {
  let navbarRoutingModule: NavbarRoutingModule;

  beforeEach(() => {
    navbarRoutingModule = new NavbarRoutingModule();
  });

  it('should create an instance', () => {
    expect(navbarRoutingModule).toBeTruthy();
  });
});
