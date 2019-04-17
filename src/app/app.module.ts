import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeService } from './theme.service';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule],
    declarations: [AppComponent, SettingsComponent],
    providers: [ThemeService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
