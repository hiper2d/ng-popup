import {Component, OnInit, ElementRef} from "@angular/core";
import {PopupService} from "../../popup/service/popup.service";
import {PopupData} from "../../popup/model/popup-data.model";
import {ModalPopupComponent} from "../../popup/dynamic/modal/modal-popup.component";

@Component({
    selector: '.content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    private width;
    private height;

    constructor(
        private _popupService: PopupService,
        _element: ElementRef
    ) {
        this.width = _element.nativeElement.offsetWidth;
        this.height = _element.nativeElement.offsetHeight;
    }

    ngOnInit() {}
    
    okIClicked(event) {
        console.log(event.target.offsetHeight);
        let data: PopupData = {
            layoutComponent: ModalPopupComponent,
            x: 100,
            y: 200,
            input: 'test param'
        };
        this._popupService.openPopup(data);
    }
}