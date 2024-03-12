import {DefaultModel} from "tql-service";

export interface UserAction {
  title: string;
  icon: string;
  id: string
}

export class UserActionModel extends DefaultModel{

  constructor(_data: any) {
    super();
  }
}

export namespace UserActionModel {
  export enum ENUM_USER_ACTION_TYPE {
    HISTORY= 'HISTORY',
    SHARE= 'SHARE',
    DOWNLOAD= 'DOWNLOAD',
    PIN= 'PIN',
    DELETE= 'DELETE',
  }

  export const UserActionTypes: Record<ENUM_USER_ACTION_TYPE, UserAction> = {
    [ENUM_USER_ACTION_TYPE.HISTORY]: {
      title: 'History',
      icon: 'fa-regular fa-clock-rotate-left',
      id: ENUM_USER_ACTION_TYPE.HISTORY
    },
    [ENUM_USER_ACTION_TYPE.SHARE]: {
      title: 'History',
      icon: 'fa-regular fa-share-nodes',
      id: ENUM_USER_ACTION_TYPE.SHARE
    },
    [ENUM_USER_ACTION_TYPE.DOWNLOAD]: {
      title: 'Download',
      icon: 'fa-regular fa-download',
      id: ENUM_USER_ACTION_TYPE.DOWNLOAD
    },
    [ENUM_USER_ACTION_TYPE.PIN]: {
      title: 'Pin',
      icon: 'fa-regular fa-thumbtack',
      id: ENUM_USER_ACTION_TYPE.PIN
    },
    [ENUM_USER_ACTION_TYPE.DELETE]: {
      title: 'Delete',
      icon: 'fa-regular fa-trash-can',
      id: ENUM_USER_ACTION_TYPE.DELETE
    },
  }
}
