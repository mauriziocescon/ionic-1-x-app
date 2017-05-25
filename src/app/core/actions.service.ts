import { Injectable } from "@angular/core";

import "rxjs/Rx";

import { AppConstantsService } from "./app-constants.service";

@Injectable()
export class ActionsService {
  private appConstants: AppConstantsService;
  private history: Array<string>;

  constructor(AppConstantsService: AppConstantsService) {
    this.appConstants = AppConstantsService;
    this.history = [];
  }

  public addAction(desc: string): void {
    this.history.unshift(desc);
    if (this.history.length > this.appConstants.ACTIONS_LENGHT) {
      this.history.pop();
    }
  }

  public getActions(): Array<string> {
    return this.history;
  }
}