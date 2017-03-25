import { NgModule } from '@angular/core';
import { SharedModule }  from '../shared';
import { ChatsComponent } from './chat.component';
import { ChatListComponent } from './chat-list';
import { ChatDetailComponent } from './chat-detail';
import { ChatNewComponent } from './chat-new';
import { ChatHolderComponent } from './chat-holder';
import { ChatsRoutingModule } from './chat-routing.module';
import { MessagesSharedModule } from '../messages';
import { ChatService } from './shared/chat.service';
import { TimePipe } from '../shared/time';
import { ChangeColorDerective } from './../shared/change-color.derective';
import { chatPipe} from '../shared/chatPipe';

@NgModule({
  declarations: [
    ChatsComponent,
    ChatListComponent,
    ChatDetailComponent,
    ChatNewComponent,
    ChatHolderComponent,
    TimePipe,
    ChangeColorDerective,
    chatPipe
  ],
  imports: [
    SharedModule,
    MessagesSharedModule,
    ChatsRoutingModule
  ],
  providers: [
    ChatService
    ]
})

export class ChatsModule {}