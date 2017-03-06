import {Component, HostListener, ElementRef, OnInit, HostBinding} from "@angular/core";
import {PopupService} from "../../service/popup.service";
import {setTimeout} from "timers";
import {BasePopup} from "../popup.base-component";

@Component({
    selector: '.h2d-modal-popup',
    templateUrl: './modal-popup.component.html',
    styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent extends BasePopup implements OnInit {
    private shown = false;

    @HostBinding('left') left;


    constructor(
        private _element: ElementRef,
        private _popupService: PopupService
    ) {
        super();
    }
    
    ngOnInit(): void {
        if (!this.data.x) {
            this.data.x = window.innerWidth/2 - this._element.nativeElement.offsetWidth/2;
        }
        if (!this.data.y) {
            this.data.y = window.innerHeight/2 - this._element.nativeElement.offsetHeight/2;
        }
        this._element.nativeElement.left = this.data.x; //todo: doesnt' work, find out why
        this._element.nativeElement.top = this.data.y;
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
            setTimeout(() => { this.shown = true; }, 1);
        }
    }
}