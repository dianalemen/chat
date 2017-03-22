import { NgModule } from '@angular/core';
import { SharedModule }  from '../shared';
import { MessagesSharedModule } from './shared';
import { MessageService } from './shared/message.service';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    MessagesSharedModule
  ],
  providers: [MessageService]
})

export class MessagesModule {}