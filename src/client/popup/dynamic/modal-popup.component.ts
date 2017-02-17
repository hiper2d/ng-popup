import {Component, HostListener, OnInit} from '@angular/core';
import {PopupService} from "../../service/popup.service";
import {BasePopup} from "./base-popup";

@Component({
    selector: '.h2d-modal-popup',
    templateUrl: './modal-popup.component.html',
    styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent extends BasePopup implements OnInit {

    constructor(private _popupService: PopupService) {
        super();
    }

    ngOnInit(): void  {
        console.log(this.input);
    }

    clickOnPopup(): void  {
        event.stopPropagation();
    }

    @HostListener('click', ['$event.target'])
    onClick(target: HTMLInputElement) {
        this._popupService.closePopup();
    }
}