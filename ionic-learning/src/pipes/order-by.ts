import { City } from './../models/city';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'orderBy', pure: false })
export class OrderBy implements PipeTransform {

    // TODO: make this generic on some way
    transform(cities: City[]) {
        return cities.sort(function (city1, city2) {
            if (city1.population < city2.population) {
                return 1;
            } else if (city1.population > city2.population) {
                return -1;
            } else {
                return 0;
            }
        });
    }
}