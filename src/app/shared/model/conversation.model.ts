import {_, DefaultModel} from 'tql-service';
import {v4 as uuidv4} from 'uuid';

export class ConversationModel extends DefaultModel {
  id: string = '';
  isUser: boolean = false;
  messages: ConversationModel.Message[] = [];

  constructor(_data: any = {}) {
    super(_data);

    // parse
    this.parse();
  }

  addMessage(text: string) {
    const message: ConversationModel.Message = new ConversationModel.Message({content: text});
    this.messages.push(message);
  }

  parse() {
    this.id = this.getValue('id') || uuidv4();
    this.isUser = this.getValue('isUser') || false;
    this.messages = [];
    _.forEach(this.getValue('content'), (e) => {
      this.messages.push(new ConversationModel.Message(e));
    });
    _.forEach(this.getValue('messages'), (e) => {
      this.messages.push(new ConversationModel.Message(e));
    });
  }

  unparse() {
    return {
      id: this.id,
      isUser: this.isUser,
      messages: _.map(this.messages, (e) => e.unparse())
    }
  }

  test() {

  }

  static unparseCollections(collections: ConversationModel.IConversationCollection[]) {
    return _.map(collections, (collection) => {
      return {
        sessionId: collection.sessionId,
        conversations: _.map(collection.conversations, (conversation) => {
          return conversation.unparse();
        })
      }
    })
  }

  static parseCollections(data: any[]): ConversationModel.IConversationCollection[] {
    return _.map(data, (data) => ({
      sessionId: data.sessionId,
      conversations: _.map(data.conversations, (conversation) => new ConversationModel(conversation))
    }));
  }
}

export namespace ConversationModel {
  export interface IConversationCollection {
    sessionId: string;
    conversations: ConversationModel[];
  }

  export enum ENUM_USERS {
    WALLY = 'WALLY',
    USER = 'YOU'
  }

  export const Users: { [key in ENUM_USERS]: any } = {
    [ENUM_USERS.WALLY]: {
      name: ENUM_USERS.WALLY,
      avatar: 'assets/images/wally.png'
    },
    [ENUM_USERS.USER]: {
      name: ENUM_USERS.USER,
      avatar: 'assets/images/user.png'
    }
  }

  export enum ENUM_MESSAGE_STATUS {
    START = 'START',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
  }

  export class Message {
    id: string = uuidv4();
    content: string = '';
    isImage: boolean = false;
    status?: ENUM_MESSAGE_STATUS = ENUM_MESSAGE_STATUS.START;
    progressMessages?: string[] = [];
    progressIndex?: number = 0;

    constructor(_data: any = {}) {
      this.content = _data.content;
      this.isImage = _data.isImage;
    }

    unparse() {
      return {
        id: this.id,
        content: this.content,
        status: this.status,
      };
    }

    parse(data: any) {
      this.id = data.id;
      this.content = data.content;
      this.status = data.status;
    }
  }
}
