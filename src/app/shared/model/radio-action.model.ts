import {DefaultModel} from "tql-service";
import {IListItem} from "tql-component";

export interface RadioAction {
  mainTitle: string;
  subTitle: string;
  id: string;
}

export class RadioActionModel extends DefaultModel{
  constructor(_data: any) {
    super(_data);
  }
}

export namespace RadioActionModel {

  export enum ENUM_RADIO_ACTION_TYPE {
    COOLING_TOWER= 'COOLING_TOWER',
    ES1_BU1= 'ES1_BU1',
    ES2_BU1= 'ES2_BU1',
    ES1_BU2= 'ES1_BU2',
  }

  export const RadioActionTypes: Record<ENUM_RADIO_ACTION_TYPE, RadioAction> = {
      [ENUM_RADIO_ACTION_TYPE.COOLING_TOWER]: {
      mainTitle: 'COOLING_TOWER',
      subTitle: 'of Hoskote Plant',
      id: ENUM_RADIO_ACTION_TYPE.COOLING_TOWER
    },
    [ENUM_RADIO_ACTION_TYPE.ES1_BU1]: {
      mainTitle: 'ES2',
      subTitle: 'of BU1',
      id: ENUM_RADIO_ACTION_TYPE.ES1_BU1
    },
    [ENUM_RADIO_ACTION_TYPE.ES2_BU1]: {
      mainTitle: 'ES2',
      subTitle: 'of BU1',
      id: ENUM_RADIO_ACTION_TYPE.ES2_BU1
    },
    [ENUM_RADIO_ACTION_TYPE.ES1_BU2]: {
      mainTitle: 'ES2',
      subTitle: 'of BU1',
      id: ENUM_RADIO_ACTION_TYPE.ES1_BU2
    }
  }
}
