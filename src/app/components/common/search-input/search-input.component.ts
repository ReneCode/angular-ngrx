import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter
} from "@angular/core";
import { Observable, Subscriber, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"]
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() searchValue: string;
  @Output() onChange = new EventEmitter();

  changeValueSubscriber: Subscriber<string>;
  subscription: Subscription;

  constructor() {}

  ngOnInit() {
    const observer = Observable.create(observer => {
      this.changeValueSubscriber = observer;
    });
    this.subscription = observer
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(val => {
        this.onChange.emit(val);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onValueChanged(value: string) {
    this.changeValueSubscriber.next(value);
  }
}
