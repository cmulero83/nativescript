import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import * as Toast from "nativescript-toasts";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AppState } from "../app.module";
import { Noticia, NuevaNoticiaAction } from "../domain/noticias.state.model";
import { NoticiasService } from "../domain/noticias.serve";



@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    resultados: Array<string>;
    layout: ElementRef;

    constructor(      private noticias: NoticiasService,
        private store: Store<AppState>) 

    {
        // Use the component constructor to inject providers.

        
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.store.select((state) => state.noticias.sugerida)
            .subscribe((data) => {
                const f = data;

                if (f != null) {
                    Toast.show({text: "Sugerimos leer: " + f.titulo, duration: Toast.DURATION.SHORT});
                }
            });

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(args): void {
        this.store.dispatch(new NuevaNoticiaAction(new Noticia(args.view.bindingContext)));
    }git

    BuscarAhora(s: string){

        console.dir("buscarAhora" + s);
        this.noticias.buscar(s).then((r: any) => {
            console.log("resultados buscarAhora: " +JSON.stringify(r));
            this.resultados = r;
        }, (e) => {
            console.log("error buscarAhora " + e);
            Toast.show({text: "Error en la busqueda", duration: Toast.DURATION.SHORT})
        })





        /*this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);

        const layout = <View>this.layout.nativeElement;
        
        layout.animate({
            backgroundColor: new Color("white"),
            duration: 3000,
            delay: 1500
        
        }).then(() => layout.animate({
            
            backgroundColor: new Color("black"),
            duration: 3000,
            delay: 1500
        }));*/


    }

}
