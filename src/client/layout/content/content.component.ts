import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PopupService} from "../../service/popup.service";

@Component({
    selector: '.content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    
    constructor(private _popupService: PopupService) { }

    ngOnInit() { }
    
    okIClicked() {
        this._popupService.showStatus = true;
    }
}