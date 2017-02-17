import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BootRoutingModule} from "./boot.routing";
import {LayoutComponent} from "./layout/layout.component";
import {ContentComponent} from "./layout/content/content.component";
import {PopupService} from "./service/popup.service";
import {PopupModule} from "./popup/popup.module";

@NgModule({
    imports: [
        BootRoutingModule,
        BrowserModule,
        PopupModule
    ],
    declarations: [
        ContentComponent,
        LayoutComponent
    ],
    providers: [PopupService],
    bootstrap: [LayoutComponent]
})
export class BootModule { }
