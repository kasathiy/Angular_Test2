import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  date = new Date();

  subscriptionObj: Subscription;

  bool;
  styleColor = "color_background";
  colorElem = "red";

  array = ['a', 'b', 'c'];

  constructor() {
    this.bool = this.title == 'myapp'
  }

  ngOnInit() {

    let promiseObj = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("First data");
      }, 1000);
    })

    promiseObj.then((data) => {
      console.log("Success", data);
    }, (data) => {
      console.log("Failure", data);
    })

    let observerObj = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("First data");
      }, 1000);

      setTimeout(() => {
        observer.next("Second data");
      }, 2000);

      setTimeout(() => {
        // observer.error("Error Happened");
        observer.complete();
      }, 3000);

      setTimeout(() => {
        observer.next("Third data");
      }, 4000);

    });

    this.subscriptionObj = observerObj.subscribe(
      (data) => {
        console.log("data", data)
      },
      (data) => {
        console.log("error", data)
      },
      () => {
        console.log("complete");
      });

    observerObj.subscribe(
      (data) => {
        console.log("data1", data)
      },
      (data) => {
        console.log("error1", data)
      },
      () => {
        console.log("complete1");
      });



  }



  onInput(event) {
    console.log("Event", event);
    this.title = event.target.value;
  }


  ngOnDestroy() {
    this.subscriptionObj.unsubscribe();
  }
}
