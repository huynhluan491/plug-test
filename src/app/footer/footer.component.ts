import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {USER_ACTIONS} from "../shared/const/user-actions.const";
import {ChatDataService} from "../shared/services/chat-data.service";

type userAction = {
  title: string; icon: string; function: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../styles.scss', '../../../src/scss/widget/index.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FooterComponent {
  @Input() isDisabled: boolean = false;
  @Input() isHistoryOpened: boolean = false;
  @Output() _toggleHistory: EventEmitter<boolean> = new EventEmitter<boolean>();

  userActionMenu: userAction[] = [
    {
      title: 'History',
      icon: 'fa-regular fa-clock-rotate-left',
      function: USER_ACTIONS.openHistory
    },
    {
      title: 'Share',
      icon: 'fa-regular fa-share-nodes',
      function: USER_ACTIONS.unfunctional
    },
    {
      title: 'Download',
      icon: 'fa-regular fa-download',
      function: USER_ACTIONS.unfunctional
    },
  ]
  chatMessage: string = '';

  constructor(private _ChatDataService: ChatDataService) {
  }


  userActionHandles(fn: string) {
    if (fn === USER_ACTIONS.openHistory) {
      this.toggleHistory();
    } else if (fn === USER_ACTIONS.unfunctional) {
      return;
    }
  }

  toggleHistory() {
    this._toggleHistory.emit(!this.isHistoryOpened);
    this.isHistoryOpened = !this.isHistoryOpened;
  }

  createNewConversation(): void {
    this._ChatDataService.createNewConversation();
  }

  sendMessage(): void {
    if (this.chatMessage) {
      console.log(this.chatMessage);
      this._ChatDataService.sendMessage(this.chatMessage)
        .then(() => {
          this.chatMessage = '';
        });
    }
  }
}
