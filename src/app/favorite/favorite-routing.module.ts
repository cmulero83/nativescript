import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FavoriteComponent } from "./favorite.component";

const routes: Routes = [
    { path: "", component: FavoriteComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FavoriteRoutingModule { }
