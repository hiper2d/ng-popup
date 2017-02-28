import {NgModule} from "@angular/core";
import {PopupComponent} from "./popup.component";
import {CommonModule} from "@angular/common";
import {PopupDirective} from "./directives/popup.directive";
import {ModalPopupComponent} from "./dynamic/modal/modal-popup.component";

@NgModule({
    imports: [CommonModule],
    exports: [PopupComponent],
    declarations: [
        ModalPopupComponent,
        PopupComponent,
        PopupDirective
    ],
    entryComponents: [
        ModalPopupComponent
    ]
})
export class PopupModule { }
