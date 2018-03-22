import { Injectable } from '@angular/core';

import { AppConstantsService } from './app-constants.service';

@Injectable()
export class UtilsService {

  constructor(protected appConstants: AppConstantsService) {
  }

  createUUID(): string {
    let d = new Date().getTime();
    if (performance && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  getDate(): string {
    return new Date().toISOString();
  }

  getTranslateKeyForSectionType(type: string): string {
    switch (type) {
      case this.appConstants.Application.SECTION_TYPES[0]:
        return 'CORE.SEC_TYPE_IMPORTANT';
      case this.appConstants.Application.SECTION_TYPES[1]:
        return 'CORE.SEC_TYPE_URGENT';
      case this.appConstants.Application.SECTION_TYPES[2]:
        return 'CORE.SEC_TYPE_CONTACTS';
      case this.appConstants.Application.SECTION_TYPES[3]:
        return 'CORE.SEC_TYPE_WORK';
      case this.appConstants.Application.SECTION_TYPES[4]:
        return 'CORE.SEC_TYPE_SPORT';
      default:
        return 'CORE.SEC_TYPE_OTHER';
    }
  }

  getIconForSectionType(type: string): string {
    switch (type) {
      case this.appConstants.Application.SECTION_TYPES[0]:
        return 'star';
      case this.appConstants.Application.SECTION_TYPES[1]:
        return 'alert';
      case this.appConstants.Application.SECTION_TYPES[2]:
        return 'contacts';
      case this.appConstants.Application.SECTION_TYPES[3]:
        return 'code-working';
      case this.appConstants.Application.SECTION_TYPES[4]:
        return 'football';
      default:
        return 'help-circle';
    }
  }
}
