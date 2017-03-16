import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {PopupData} from "../model/popup-data.model";

@Injectable()
export class PopupService {
	private _popupSubject = new BehaviorSubject<PopupData>(null);
	private _isShown = false;
	popupObservable: Observable<PopupData> = this._popupSubject.asObservable();
	
	openPopup(data: PopupData) {
		if (!this._isShown) {
			this._popupSubject.next(data);
			this._isShown = true;
		}
	}
	
	closePopup() {
		if (this._isShown) {
			this._popupSubject.next(null);
			this._isShown = false;
		}
	}

	get isShown() {
		return this._isShown;
	}
}