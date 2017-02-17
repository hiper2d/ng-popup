import {
    AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit,
    ViewChild
} from "@angular/core";
import {PopupService} from "../service/popup.service";
import {Subscription} from "rxjs";
import {PopupDirective} from "../directives/popup.directive";
import {PopupData} from "../model/popup-data.model";
import {BasePopup} from "./dynamic/base-popup";

@Component({
    selector: '.h2d-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements AfterViewInit, OnInit, OnDestroy {

    @ViewChild(PopupDirective) popupContentHost: PopupDirective;

    private _subscriptionShown: Subscription;

    constructor(
        private _popupService: PopupService,
        private _componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void  {
        this._subscriptionShown = this._popupService.popupObservable.subscribe((data: PopupData) => {
            let viewContainerRef = this.popupContentHost.viewContainerRef;
            viewContainerRef.clear();
            if (data) {
                let componentFactory = this._componentFactoryResolver.resolveComponentFactory<BasePopup>(data.component);
                let componentRef: ComponentRef<BasePopup> = viewContainerRef.createComponent<BasePopup>(componentFactory);
                componentRef.instance.input = data.input;
            }
        });
    }

    ngOnDestroy(): void {
        this._subscriptionShown.unsubscribe();
    }
}