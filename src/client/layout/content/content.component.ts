import {Component, OnInit, ElementRef} from "@angular/core";
import {PopupService} from "../../popup/service/popup.service";
import {PopupData} from "../../popup/model/popup-data.model";
import {NonblockingPopupComponent} from "../../popup/dynamic/nonblocking/nonblocking-popup.component";
import {InfoPopupComponent} from "../../popup/dynamic/info/info-popup.component";
import {ModalDialogComponent} from "../../popup/dynamic/modal/modal-dialog.component";

@Component({
	selector: '.content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
	
	constructor(private _element: ElementRef,
	            private _popupService: PopupService) {
	}
	
	ngOnInit() {
	}
	
	nonblockingClick() {
		let data: PopupData = {
			layoutComponent: NonblockingPopupComponent,
			y: 50,
			input: 'test param'
		};
		this._popupService.openPopup(data);
	}
	
	infoClicked() {
		let data: PopupData = {
			layoutComponent: InfoPopupComponent,
			input: 'test param'
		};
		this._popupService.openPopup(data);
	}
	
	dialogClicked() {
		let data: PopupData = {
			layoutComponent: ModalDialogComponent,
			input: 'test param'
		};
		this._popupService.openPopup(data);
	}
}