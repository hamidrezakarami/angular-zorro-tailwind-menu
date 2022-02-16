import { Component, EventEmitter, Input, Output } from '@angular/core';
import { menuButton } from '../../shared/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() set setButtons(value: menuButton[]) {
    this.buttons = value;
    this.previousButton = this.buttons.find((button) => button.isActive);
  }
  @Output() onClickButton = new EventEmitter<menuButton>();
  LOCK = '../../../../assets/icons/lock.svg';
  LOCK_SLASH = '../../../../assets/icons/lock_slash.svg';
  ARROW_LEFT_ICON = '../../../../assets/icons/Arrow_left.svg';
  ARROW_RIGHT_ICON = '../../../../assets/icons/Arrow_right.svg';

  isCollapsed = true;
  isLocked: boolean = false;
  previousButton: menuButton | undefined = undefined;
  lockedStatus: 'Locked' | 'Unlocked' = 'Unlocked';
  lockedIcon: string = this.LOCK_SLASH;
  buttons: menuButton[] = [];

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleLocked(): void {
    this.isLocked = !this.isLocked;
    this.lockedStatus = this.lockedStatus == 'Locked' ? 'Unlocked' : 'Locked';
    this.lockedIcon =
      this.lockedStatus == 'Unlocked' ? this.LOCK_SLASH : this.LOCK;
    if (!this.isLocked) this.isCollapsed = true;
  }

  mouseEnter(): void {
    if (!this.isLocked) this.isCollapsed = false;
  }

  mouseLeave(): void {
    if (!this.isLocked) this.isCollapsed = true;
  }

  onMenuButton(item: menuButton) {
    if (!item.disable) {
      if (this.previousButton) this.previousButton.isActive = false;
      this.previousButton = item;
      item.isActive = true;
      this.onClickButton.emit(item);
    }
  }
}
