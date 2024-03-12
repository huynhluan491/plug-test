export class messageContent {
  isImage: boolean = false;
  content: string = '';
}

export class MessageResponseModel {
  isUser: boolean = false;
  content: messageContent[] = [];
}
