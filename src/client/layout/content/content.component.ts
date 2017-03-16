import {Component, OnInit, ElementRef} from "@angular/core";
import {PopupService} from "../../popup/service/popup.service";
import {PopupData} from "../../popup/model/popup-data.model";
import {NonblockingPopupComponent} from "../../popup/dynamic/modal/nonblocking-popup.component";
import {InfoPopupComponent} from "../../popup/dynamic/info/info-popup.component";

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
	
	okIClicked(event: MouseEvent) {
		let data: PopupData = {
			layoutComponent: NonblockingPopupComponent,
			y: 50,
			input: 'test param'
		};
		this._popupService.openPopup(data);
	}
	
	okIClicked2(event: MouseEvent) {
		let data: PopupData = {
			layoutComponent: InfoPopupComponent,
			input: 'test param'
		};
		this._popupService.openPopup(data);
	}
}