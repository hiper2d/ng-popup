import {
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    OnDestroy,
    OnInit,
    ViewChild
} from "@angular/core";
import {PopupService} from "./service/popup.service";
import {Subscription} from "rxjs";
import {PopupDirective} from "./directives/popup.directive";
import {PopupData} from "./model/popup-data.model";

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
                let componentFactory = this._componentFactoryResolver.resolveComponentFactory<PopupData>(data.layoutComponent);
                let componentRef: ComponentRef<PopupData> = viewContainerRef.createComponent<PopupData>(componentFactory);
                componentRef.instance.contentComponent = data.contentComponent;
                componentRef.instance.input = data.input;
                componentRef.instance.x = data.x;
                componentRef.instance.y = data.y;
            }
        });
    }

    ngOnDestroy(): void {
        this._subscriptionShown.unsubscribe();
    }
}