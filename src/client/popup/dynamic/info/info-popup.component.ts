import {Component, OnInit, ElementRef, AfterViewChecked, OnDestroy} from "@angular/core";
import {BasePopup} from "../popup.base-component";
import {PopupService} from "../../service/popup.service";
import {Observable, Subscription} from "rxjs";

@Component({
	selector: '.h2d-info-popup',
	templateUrl: './info-popup.component.html',
	styleUrls: ['./info-popup.component.scss']
})
export class InfoPopupComponent extends BasePopup implements OnInit, AfterViewChecked, OnDestroy {
	countDown = 3;
	private _timer = Observable.timer(1000, 1000).take(this.countDown);
	private _scr: Subscription;
	
	constructor(private _element: ElementRef,
	            private _popupService: PopupService) {
		super();
	}
	
	ngOnInit(): void {
		this._scr = this._timer.subscribe(
			t => this.countDown--,
			err => {},
			() => this._popupService.closePopup()
		);
	}
	
	ngAfterViewChecked(): void {
		this.data.x = window.innerWidth / 2 - this._element.nativeElement.offsetWidth / 2;
		this._element.nativeElement.style.left = `${this.data.x}px`;
	}
	
	ngOnDestroy(): void {
		this._scr.unsubscribe();
	}
}