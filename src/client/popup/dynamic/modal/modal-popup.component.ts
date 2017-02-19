import {
    AfterViewInit, Component, ComponentFactoryResolver, HostListener, ViewChild, ElementRef,
    OnInit
} from "@angular/core";
import {PopupDirective} from "../../directives/popup.directive";
import {PopupService} from "../../service/popup.service";
import {PopupData} from "../../model/popup-data.model";

@Component({
    selector: '.h2d-modal-popup',
    templateUrl: './modal-popup.component.html',
    styleUrls: ['./modal-popup.component.scss']
})
export class ModalPopupComponent extends PopupData implements OnInit, AfterViewInit {

    @ViewChild(PopupDirective) popupContentHost: PopupDirective;
    @ViewChild('popupwindow') popupwindow: ElementRef;

    constructor(
        private _popupService: PopupService,
        private _componentFactoryResolver: ComponentFactoryResolver
    ) {
        super();
    }
    
    ngOnInit(): void {
        if (!this.x) {
            this.x = window.innerWidth/2 - this.popupwindow.nativeElement.offsetWidth/2;
        }
        if (!this.y) {
            this.y = window.innerHeight/2 - this.popupwindow.nativeElement.offsetHeight/2;
        }
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