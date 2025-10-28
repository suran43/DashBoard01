import { Component, Input } from '@angular/core';
import { InterUser } from '../../../Model/inter-user';
import { InterPath } from '../../../Model/inter-path';

@Component({
  selector: 'app-side-bar-items',
  imports: [],
  templateUrl: './side-bar-items.html',
  styleUrl: './side-bar-items.css',
})
export class SideBarItems {
@Input() orgmenu!:InterPath;
}
