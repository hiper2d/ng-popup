import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {PopupService} from "../../service/popup.service";
import {PopupData} from "../../model/popup-data.model";
import {ModalPopupComponent} from "../../popup/dynamic/modal-popup.component";

@Component({
    selector: '.content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    
    constructor(private _popupService: PopupService) { }

    ngOnInit() { }
    
    okIClicked() {
        let data: PopupData = {component: ModalPopupComponent, input: 'test param'};
        this._popupService.openPopup(data);
    }
}