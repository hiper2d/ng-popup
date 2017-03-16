import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BootModule} from "./boot.module";
import "../public/reset.css";

platformBrowserDynamic().bootstrapModule(BootModule);