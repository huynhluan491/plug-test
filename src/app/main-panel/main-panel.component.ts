import {ChangeDetectorRef, Component, OnInit , ViewEncapsulation} from '@angular/core';
import {_, DefaultComponent} from 'tql-service';
// import {IListItem} from 'tql-component';
import {DEFAULT_MAIN_PANEL} from "../shared/const/value.const";
import {FocusEntity, FocusEntityModel} from "../shared/model/focus-entity.model";
import {ChatDataService} from "../shared/services/chat-data.service";
import {RadioAction, RadioActionModel} from "../shared/model/radio-action.model";
import {ConversationModel} from "../shared/model/conversation.model";

declare const window: any;

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss', '../../styles.scss', '../../../src/scss/widget/index.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MainPanelComponent extends DefaultComponent implements OnInit {
  isShowed: boolean = DEFAULT_MAIN_PANEL.isShowed;
  isMaximized: boolean = DEFAULT_MAIN_PANEL.isMaximized;
  isHistoryOpened: boolean = DEFAULT_MAIN_PANEL.isHistoryOpened;
  top: string = DEFAULT_MAIN_PANEL.top;
  left: string = DEFAULT_MAIN_PANEL.left;
  width: string = DEFAULT_MAIN_PANEL.width;
  height: string = DEFAULT_MAIN_PANEL.height;
  selectedGearSetting: string = '';
  selectedRadioAction: string = '';

  gearActionList: FocusEntity[] = _.map(FocusEntityModel.FocusEntityTypes, x => x);

  radioActionList: RadioAction[] = _.map(RadioActionModel.RadioActionTypes, x => x);

  collection: ConversationModel.IConversationCollection | null = null;


  constructor(private _ChangeDetectorRef: ChangeDetectorRef,
              private _ChatDataService: ChatDataService) {
    super();
    const self = this;
    window.ctWally = {
      show: (top?: any, left?: any, width?: any, height?: any) => {
        console.log('ct-wally', 'show');
        self.show(top, left, width, height);
        this._ChangeDetectorRef.detectChanges();
      },
      hide: () => {
        console.log('ct-wally', 'hide');
        self.hide();
        this._ChangeDetectorRef.detectChanges();
      }
    }

    this._ChatDataService.loadCollectionsFromLocal();
    this.addSubscribes(
      this._ChatDataService.collections$.subscribe((collections: ConversationModel.IConversationCollection[]) => {
        console.log(collections);
        if (collections?.length > 0 && this._ChatDataService.currentCollection$.value === null) {
          this.collection = collections[0];
          console.log('collection', this.collection);
          this._ChatDataService.currentCollection$.next(this.collection);
        }
      }),
      this._ChatDataService.currentCollection$.subscribe((collection: ConversationModel.IConversationCollection | null) => {
        console.log(collection);
        this.collection = null;
        setTimeout(() => {
          this.collection = collection;
        });
      })
    )
  }

  ngOnInit() {
    const htmlDom: any = window.document.querySelector('html');
    htmlDom.classList.add('theme-dark');
    htmlDom.classList.add('green');
  }

  show(top: any = DEFAULT_MAIN_PANEL.top, left: any = DEFAULT_MAIN_PANEL.left, width: any = DEFAULT_MAIN_PANEL.width, height: any = DEFAULT_MAIN_PANEL.height) {
    this.top = _.isNumber(top) ? top + 'px' : top;
    this.left = _.isNumber(left) ? left + 'px' : left;
    this.width = _.isNumber(width) ? width + 'px' : width;
    this.height = _.isNumber(height) ? height + 'px' : height;
    console.log(this.top, this.left, this.width, this.height);
    this.isShowed = true;
    this._ChangeDetectorRef.detectChanges();
  }

  hide() {
    this.isShowed = false;
  }

  setMax() {
    this.isMaximized = true;
  }

  setMin() {
    this.isMaximized = false;
  }

  toggleHistory(value: boolean) {
    this.isHistoryOpened = value;
    console.log(this.isHistoryOpened)
  }
}
