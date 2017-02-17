import {AfterViewInit, Component, ComponentFactoryResolver, HostListener, ViewChild} from "@angular/core";
import {BasePopup} from "../base-popup";
import {PopupDirective} from "../../../directives/popup.directive";
import {PopupService} from "../../../service/popup.service";

@Component({
    selector: '.h2d-modal-popup',
    templateUrl: './modal-popup.component.html',
    styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent extends BasePopup implements AfterViewInit {

    @ViewChild(PopupDirective) popupContentHost: PopupDirective;

    constructor(
        private _popupService: PopupService,
        private _componentFactoryResolver: ComponentFactoryResolver
    ) {
        super();
    }

    ngAfterViewInit(): void  {
        let viewContainerRef = this.popupContentHost.viewContainerRef;
        viewContainerRef.clear();
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.contentComponent);
        viewContainerRef.createComponent(componentFactory);
    }

    clickOnPopup(): void  {
        event.stopPropagation();
    }

    @HostListener('click', ['$event.target'])
    onClick(target: HTMLInputElement) {
        this._popupService.closePopup();
    }
}