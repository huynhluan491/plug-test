import {DefaultModel} from 'tql-service';
import {IListItem} from 'tql-component';

export interface FocusEntity {
  id: string;
  iconClassName: string;
  title: string
}

export class FocusEntityModel extends DefaultModel {
  constructor(_data: any) {
    super(_data);
  }
}

export namespace FocusEntityModel {
  export enum ENUM_FOCUS_ENTITY_TYPE {
    ES = 'ES',
    BU = 'BU',
    BROAD_MINDED = 'BROAD_MINDED'
  }

  export const FocusEntityTypes: Record<ENUM_FOCUS_ENTITY_TYPE, FocusEntity> = {
    [ENUM_FOCUS_ENTITY_TYPE.ES]: {
      id: ENUM_FOCUS_ENTITY_TYPE.ES,
      iconClassName: 'fa-light fa-stars font-size-18px',
      title: 'Focused ES',
    },
    [ENUM_FOCUS_ENTITY_TYPE.BU]: {
      id: ENUM_FOCUS_ENTITY_TYPE.BU,
      iconClassName: 'fa-light fa-stars font-size-18px',
      title: 'Focused BU',
    },
    [ENUM_FOCUS_ENTITY_TYPE.BROAD_MINDED]: {
      id: ENUM_FOCUS_ENTITY_TYPE.BROAD_MINDED,
      iconClassName: 'fa-light fa-stars font-size-18px',
      title: 'Broad Minded'
    },
  }
}
