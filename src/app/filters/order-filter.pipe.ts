import { Pipe, PipeTransform } from '@angular/core';

import { Orders } from './orders';

@Pipe({
    name: 'orderFilter'
})
export class OrderFilter implements PipeTransform {
    transform(items: any[], criteria: any): any {

        return items.filter(item =>{
           for (let key in item ) {
             if((""+item[key]).includes(criteria)){
                return true;
             }
           }
           return false;
        });
    }
}