// Pipe con pure en true, solo se dispara cuando los argumentos cambian (comportamiento por defecto)
// Pipe con pure en false, cada que haya un cambio se dispara (consume más recursos)
import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroes.interface";

@Pipe({
    name: 'imagen'
    // pure: false
})
export class ImagenPipe implements PipeTransform {
    transform(heroe: Heroe): string {
        if(!heroe.id && !heroe.alt_img) {
            return 'assets/no-image.png';
        } else if (heroe.alt_img) {
            return heroe.alt_img;
        } else {
            return `assets/heroes/${heroe.id}.jpg`
        }
    }
}