import {AfterViewChecked, Component, ElementRef, HostListener} from "@angular/core";
import {PopupService} from "../../service/popup.service";
import {setTimeout} from "timers";
import {BasePopup} from "../popup.base-component";

@Component({
	selector: '.h2d-modal-popup',
	templateUrl: './nonblocking-popup.component.html',
	styleUrls: ['./nonblocking-popup.component.scss']
})
export class NonblockingPopupComponent extends BasePopup implements AfterViewChecked {
	private shown = false;
	
	constructor(private _element: ElementRef,
	            private _popupService: PopupService) {
		super();
	}
	
	ngAfterViewChecked(): void {
		if (!this.data.x) {
			this.data.x = window.innerWidth / 2 - this._element.nativeElement.offsetWidth / 2;
		}
		if (!this.data.y) {
			this.data.y = window.innerHeight / 2 - this._element.nativeElement.offsetHeight / 2;
		}
		this._element.nativeElement.style.left = `${this.data.x}px`;
		this._element.nativeElement.style.top = `${this.data.y}px`;
	}
	
	@HostListener('click')
	onClick() {
		event.stopPropagation();
	}
	
	@HostListener('document:click')
	onGlobalClick() {
		// HostListener catches click event bubbled from the original source right after ngAfterViewInit and closes popup.
		// Workaround: not to trigger closePopup first 1 millisecond.
		if (this.shown) {
			this._popupService.closePopup();
		} else {
			setTimeout(() => {
				this.shown = true;
			}, 1);
		}
	}
}