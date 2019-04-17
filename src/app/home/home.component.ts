import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Switch } from 'tns-core-modules/ui/switch';
import { RouterExtensions } from 'nativescript-angular/router';
import { ThemeService } from '../theme.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'Home',
    moduleId: module.id,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    darkTheme$: Observable<boolean>;

    constructor(
        private router: RouterExtensions,
        private themeService: ThemeService
    ) {
        this.darkTheme$ = this.themeService.getIsDark();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    navigateSettings() {
        this.router.navigate(['settings']);
    }
}
