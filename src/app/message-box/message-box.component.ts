import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {messageContent, MessageResponseModel} from '../shared/model/message-response.model';
import {ChatDataService} from '../shared/services/chat-data.service';
import {Subject, takeUntil} from 'rxjs';
import {ConversationModel} from '../shared/model/conversation.model';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss', '../../styles.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MessageBoxComponent implements OnInit, OnDestroy {
  @Input() data: ConversationModel[] = [];
  protected ChatContent: MessageResponseModel[] = [];
  ngUnsubscription$: Subject<void> = new Subject<void>();

  constructor(private _ChatDataService: ChatDataService) {
  }

  ngOnInit() {
    this._ChatDataService.getCurrentConversationData$()
      .pipe(takeUntil(this.ngUnsubscription$))
      .subscribe(res => {
        this.ChatContent = res;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscription$.next();
    this.ngUnsubscription$.complete();
  }
}
