import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";
import {PopupService} from "../../service/popup.service";
import {BasePopup} from "../popup.base-component";

@Component({
	selector: '.h2d-modal-dialog',
	templateUrl: './modal-dialog.component.html',
	styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent extends BasePopup implements AfterViewInit {
	@ViewChild('dialog') dialog: ElementRef;
	
	constructor(private _popupService: PopupService) {
		super();
	}
	
	ngAfterViewInit(): void {
		let x = window.innerWidth / 2 - this.dialog.nativeElement.offsetWidth / 2;
		let y = window.innerHeight / 2 - this.dialog.nativeElement.offsetHeight / 2;
		this.dialog.nativeElement.style.left = `${x}px`;
		this.dialog.nativeElement.style.top = `${y}px`;
	}
	
	close() {
		this._popupService.closePopup();
	}
}