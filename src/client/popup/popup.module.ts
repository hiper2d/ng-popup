import {NgModule} from "@angular/core";

import {PopupComponent} from "./popup.component";
import {CommonModule} from "@angular/common";
import {ModalPopupComponent} from "./dynamic/modal-popup.component";
import {PopupDirective} from "../directives/popup.directive";
import {StandardPopupContentComponent} from "./dynamic/content/standard/standard-popup-content.component";

@NgModule({
    imports: [CommonModule],
    exports: [PopupComponent],
    declarations: [
        ModalPopupComponent,
        PopupComponent,
        PopupDirective,
        StandardPopupContentComponent
    ],
    entryComponents: [
        ModalPopupComponent,
        StandardPopupContentComponent
    ]
})
export class PopupModule { }
