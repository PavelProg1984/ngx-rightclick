import { Component } from '@angular/core';

import { ContextMenuService } from '../../lib/context-menu.service';
import { MenuPackage } from '../../lib/context-menu-injector';
import { MenuComponent } from '../../lib/menu.component';

@Component({
  selector: 'simple-menu',
  template: `
  <div class="dropdown-menu show" style="position: relative;">
    <button class="dropdown-item" (click)="handleClick()">Another action</button>
    <button class="dropdown-item disabled">Disabled link</button>
    <div class="dropdown-divider"></div>
    <button class="dropdown-item" (click)="handleClick()">Separated link</button>
  </div>
  `,
})
export class SimpleMenuComponent extends MenuComponent {
  // this module does not have animations, set lazy false
  lazy = false;

  constructor(
    public menuPackage: MenuPackage,
    public contextMenuService: ContextMenuService,
  ) {
    super(menuPackage, contextMenuService);
  }

  handleClick() {
    // tell the menu to close
    this.contextMenuService.closeAll();
  }
}
