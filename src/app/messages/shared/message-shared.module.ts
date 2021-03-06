import { NgModule } from '@angular/core';
import { SharedModule }  from '../../shared';
import { MessageListComponent } from './message-list';
import { MessageNewComponent } from './message-new';
import { MessageService } from './message.service';
import { HightLightDerective } from '../../shared/highlight.directive';
import { MessagePipeFilter } from './message-filter.pipe';
import { MessageSocketService } from './message-soket.service';

@NgModule({
  declarations: [
    MessageListComponent,
    MessageNewComponent,
    HightLightDerective,
    MessagePipeFilter
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageListComponent,
    MessageNewComponent,
  ],
  providers: [
  MessageService,
  MessageSocketService
  ]
})

export class MessagesSharedModule {}