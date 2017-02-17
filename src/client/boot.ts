// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/max';

// Vendors and something global
import '../public/reset.css';

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BootModule} from "./boot.module";

platformBrowserDynamic().bootstrapModule(BootModule);