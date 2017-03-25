import {NgModule} from "@angular/core";
import {PopupComponent} from "./popup.component";
import {CommonModule} from "@angular/common";
import {PopupDirective} from "./directives/popup.directive";
import {InfoPopupComponent} from "./dynamic/info/info-popup.component";
import {NonblockingPopupComponent} from "./dynamic/nonblocking/nonblocking-popup.component";
import {ModalDialogComponent} from "./dynamic/modal/modal-dialog.component";

@NgModule({
	imports: [CommonModule],
	exports: [PopupComponent],
	declarations: [
		InfoPopupComponent,
		ModalDialogComponent,
		NonblockingPopupComponent,
		PopupComponent,
		PopupDirective
	],
	entryComponents: [
		InfoPopupComponent,
		ModalDialogComponent,
		NonblockingPopupComponent
	]
})
export class PopupModule {
}
