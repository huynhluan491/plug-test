import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DrawerService {
  isHistoryOpened: boolean = false;


  constructor() { }
}
