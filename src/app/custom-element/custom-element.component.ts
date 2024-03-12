import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['../../styles.scss'], //<--import global styles for encapsulation shadow dom.
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CustomElementComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
}
