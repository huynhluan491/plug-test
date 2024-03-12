import {Component, Input} from '@angular/core';
import {DEFAULT_MAIN_PANEL} from "../shared/const/value.const";
import {ConversationHistoryModel} from "../shared/model/conversation-history.model";
import {HistoryMenuModel} from "../shared/model/history-menu.model";

@Component({
  selector: 'app-conversation-history',
  templateUrl: './conversation-history.component.html',
  styleUrls: ['./conversation-history.component.scss']
})
export class ConversationHistoryComponent {
  isHistoryOpened: boolean = DEFAULT_MAIN_PANEL.isHistoryOpened;
  conversationHistoryList: ConversationHistoryModel[] = [
    {
      title: 'Has there been a change in emissions since last year?',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'What could be causing the increase?',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    },
    {
      title: 'Fusce convallis cursus libero quis faucibus',
      createdAt: 'mm/dd/yyyy'
    }
  ]

  historyMenuList: HistoryMenuModel[] = [
    {
      title: 'Share',
      icon: 'fa-regular fa-share-nodes'
    },
    {
      title: 'Download',
      icon: 'fa-regular fa-download'
    },
    {
      title: 'Pin',
      icon: 'fa-regular fa-thumbtack'
    },
    {
      title: 'Delete',
      icon: 'fa-regular fa-trash-can'
    },
  ]
}
