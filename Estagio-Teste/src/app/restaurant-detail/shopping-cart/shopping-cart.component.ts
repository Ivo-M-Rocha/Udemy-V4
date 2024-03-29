import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { trigger, state, style, transition, animate, keyframes} from "@angular/animations"


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row' , [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes ([
        style({opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1})
      ]))),
     transition('ready => void', animate('300ms 0s ease-out', keyframes ([
        style({opacity: 1, transform: 'translateX(0)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset: 1})
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready'

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCartService.items
  }

  clear(){
    return this.shoppingCartService.clear()
  }

  removeitem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  additem(item:any){
    this.shoppingCartService.addItem(item)
  }

  total(): number{
    return this.shoppingCartService.total()
  }

}
