import { Component } from '@angular/core';
import { menuButton } from './menu/shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  FAKE_BUTTONS:menuButton[] = [
    {
      name: 'Dashboard',
      icon: '../../../../assets/icons/category.svg',
      secondIcon: "",
      badge: 3,
      isActive: false,
      disable: false,
    },
    {
      name: 'Calendar',
      icon: '../../../../assets/icons/calender.svg',
      secondIcon: "../../../../assets/icons/Refresh.svg",
      badge: 0,
      isActive: true,
      disable: false,
    },
    {
      name: 'Patients',
      icon: '../../../../assets/icons/user_profile.svg',
      secondIcon: "",
      badge: 0,
      isActive: false,
      disable: false,
    },
    {
      name: 'Prescription',
      icon: '../../../../assets/icons/ticket.svg',
      secondIcon: "../../../../assets/icons/add.svg",
      badge: 0,
      isActive: false,
      disable: false,
    },
    {
      name: 'Message',
      icon: '../../../../assets/icons/messages.svg',
      secondIcon: "",
      badge: 36,
      isActive: false,
      disable: false,
    },
    {
      name: 'Finance',
      icon: '../../../../assets/icons/chart.svg',
      secondIcon: "",
      badge: 0,
      isActive: false,
      disable: true,
    },
  ]

  onClickButton(event: menuButton): void {
    alert(`Click on ${event.name}`)
  }
}
