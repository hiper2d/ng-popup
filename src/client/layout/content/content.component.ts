import {Component, OnInit} from "@angular/core";
import {PopupService} from "../../popup/service/popup.service";
import {PopupData} from "../../popup/model/popup-data.model";
import {ModalPopupComponent} from "../../popup/dynamic/modal/modal-popup.component";
import {StandardPopupContentComponent} from "../../popup/dynamic/content/standard/standard-popup-content.component";

@Component({
    selector: '.content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    
    constructor(private _popupService: PopupService) { }

    ngOnInit() { }
    
    okIClicked() {
        let data: PopupData = {
            layoutComponent: ModalPopupComponent,
            contentComponent: StandardPopupContentComponent,
            input: 'test param'
        };
        this._popupService.openPopup(data);
    }
}