import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, StoreModule as NgRxStoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { initializeNoticiasState, NoticiasEffects, NoticiasState, reducersNoticias } from "./domain/noticias.state.model";

import { NoticiasService } from "./domain/noticias.serve";

// Redux init

export interface AppState {

        noticias: NoticiasState;
    }
    
    const reducersInitialState = {
    
        noticias: initializeNoticiasState()
    };
    
    // Fin redux init

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState}),
        EffectsModule.forRoot([NoticiasEffects])
    ],
    providers:[NoticiasService],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
