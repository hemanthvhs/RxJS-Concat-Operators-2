import { Component,OnInit } from '@angular/core';
import {of,concat} from 'rxjs';
import {} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  ngOnInit(){
    const source1$ = of(1,2,3);
    const source2$ = of(4,5,6);
    const source3$ = of(7,8,9);

    const result$ = concat(source1$,source2$,source3$);

    result$.subscribe(console.log);
  }
  
  /* 
  Explanation : concat takes a group of observables & combine/concatenate into single observable. 

Here group of observables are source1$,source2$,source3$ and concatenates all observables using concat() and final concatenation is the observable.Hence need to be stored in variable result$.

Here we don’t manually need to subscribe to source1$,source2$,source3$ as concat internally does that. We need to only subscribe to the final concatenated observable which is result$.

  
   */

}
