import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService {
    private isDark: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        true
    );

    constructor() {}

    getIsDark(): Observable<boolean> {
        return this.isDark.asObservable();
    }

    setDark(isDark: boolean) {
        this.isDark.next(isDark);
    }
}
