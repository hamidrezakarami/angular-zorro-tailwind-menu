import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

import { NzSelectModule } from 'ng-zorro-antd/select';


const NG_ZORRO = [
  NzDropDownModule,
  NzIconModule,
  NzToolTipModule,
  NzButtonModule,
  NzSelectModule,
  NzBadgeModule
]

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    NG_ZORRO
  ],
  exports: [
    MenuComponent,
    NG_ZORRO

  ]
})
export class MenuModule { }
