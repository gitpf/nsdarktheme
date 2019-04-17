import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Switch } from 'tns-core-modules/ui/switch';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouterExtensions } from 'nativescript-angular/router';
import { Transition } from 'tns-core-modules/ui/transition/transition';

@Component({
    moduleId: module.id,
    selector: 'ns-settings',
    templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit {
    darkTheme$: Observable<boolean>;

    constructor(
        private themeService: ThemeService,
        private router: RouterExtensions
    ) {
        this.darkTheme$ = this.themeService.getIsDark();
    }

    ngOnInit() {}

    public onFirstChecked(args) {
        let firstSwitch = <Switch>args.object;
        this.themeService.setDark(firstSwitch.checked);
    }

    navigateHome() {
        this.router.navigate(['home'], { clearHistory: true });
    }
}
