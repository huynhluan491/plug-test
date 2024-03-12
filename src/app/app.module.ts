import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule,} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {CustomElementComponent} from './custom-element/custom-element.component';
import {createCustomElement} from '@angular/elements';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MainPanelComponent} from "./main-panel/main-panel.component";
import {FooterComponent} from "./footer/footer.component";
import {ConversationHistoryComponent} from "./conversation-history/conversation-history.component";
import {MessageBoxComponent} from "./message-box/message-box.component";
import {SharedModule} from "./shared/shared.module";
import {TqlComponentModule} from "tql-component";
import {MaterialsModule, TqlThemeModule} from "tql-theme";
import {TqlServiceModule} from "tql-service";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CustomElementComponent, MainPanelComponent, FooterComponent, ConversationHistoryComponent, MessageBoxComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialsModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    SharedModule,
    TqlServiceModule,
    TqlThemeModule,
    TqlComponentModule,
    DragDropModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const customElement = createCustomElement(MainPanelComponent, {
      injector: this.injector,
    });
    customElements.define('app-custom-element', customElement);
  }
}
