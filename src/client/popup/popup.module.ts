import {NgModule} from "@angular/core";
import {PopupComponent} from "./popup.component";
import {CommonModule} from "@angular/common";
import {PopupDirective} from "./directives/popup.directive";
import {InfoPopupComponent} from "./dynamic/info/info-popup.component";
import {NonblockingPopupComponent} from "./dynamic/modal/nonblocking-popup.component";

@NgModule({
	imports: [CommonModule],
	exports: [PopupComponent],
	declarations: [
		InfoPopupComponent,
		NonblockingPopupComponent,
		PopupComponent,
		PopupDirective
	],
	entryComponents: [
		InfoPopupComponent,
		NonblockingPopupComponent
	]
})
export class PopupModule {
}
