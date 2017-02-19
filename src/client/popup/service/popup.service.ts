import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {PopupData} from "../model/popup-data.model";

@Injectable()
export class PopupService {
	private _popupSubject = new BehaviorSubject<PopupData>(null);
	popupObservable: Observable<PopupData> = this._popupSubject.asObservable();

	openPopup(data: PopupData) {
		this._popupSubject.next(data);
	}

	closePopup() {
		this._popupSubject.next(null);
	}
}