import { NgModule } from '@angular/core';
import { SharedModule }  from '../../shared';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';
import { MessageService } from './message.service';
import { HightLightDerective } from '../../shared/highlight.directive';

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent,
    HightLightDerective
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageListComponent,
    MessageNewComponent
  ],
  providers: [MessageService]
})

export class MessagesSharedModule {}