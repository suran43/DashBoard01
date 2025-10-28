import { Component } from '@angular/core';
import { SideBarItems } from './side-bar-items/side-bar-items';
import { InterPath } from '../../Model/inter-path';

@Component({
  selector: 'app-side-bar',
  imports: [SideBarItems],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {
sidemenu:InterPath[]=[
  {name:'Home',path:'/'},
  {name:'About',path:'/About'},
  {name:'Conact',path:'/Conact'},
]
}
