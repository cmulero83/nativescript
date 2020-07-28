import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FavoriteRoutingModule } from "./favorite-routing.module";
import { FavoriteComponent } from "./favorite.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FavoriteRoutingModule
    ],
    declarations: [
        FavoriteComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FavoriteModule { }
