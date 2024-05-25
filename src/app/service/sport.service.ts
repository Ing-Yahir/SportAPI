import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs";
import { Api } from "./Api";

@Injectable({
    providedIn: 'root'
})

export class SportService {
    constructor(private http: HttpClient) { }

    getSport() {
        return this.http.get(`${Api.SPORT}`).pipe(
            catchError((err: any) => {
                return err;
            }),
            map((resp: any) => {
                return resp;
            })
        );
    }

    createRandomSport(obj: any) {
        return this.http.post(`${Api.SPORT}`, obj).pipe(
            catchError((err: any) => {
                return err;
            }),
            map((resp: any) => {
                return resp;
            })
        );
    }

    deleteSport(id: string) {
        return this.http.delete(`${Api.SPORT}/${id}`).pipe(
            catchError((err: any) => {
                return err;
            }),
            map((resp: any) => {
                return resp;
            })
        );
    }

}