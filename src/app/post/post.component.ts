import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  OnDestroy
{
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();
  @Input() post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log(this.infoRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  removePost() {
    this.onRemove.emit(this.post.id);
  }
}
