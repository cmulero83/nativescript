import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.serve";
import { View, Color } from "tns-core-modules/ui/page";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    resultados: Array<string>;
    layout: ElementRef;

    constructor(private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.

        this.noticias.agregar("Hola");
        this.noticias.agregar("Holaa");
        this.noticias.agregar("Hola5");
        this.noticias.agregar("Hola33");

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x): void {
        console.dir(x);
    }

    BuscarAhora(s: string){
        this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);

        const layout = <View>this.layout.nativeElement;
        
        layout.animate({
            backgroundColor: new Color("white"),
            duration: 3000,
            delay: 1500
        
        }).then(() => layout.animate({
            
            backgroundColor: new Color("black"),
            duration: 3000,
            delay: 1500
        }));


    }

}
