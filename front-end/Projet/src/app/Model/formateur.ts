import { Organisme } from "./organisme";

export class Formateur {
    id:number;
    nom:string;
    prenom:string;
    email : string;
    telephone : number;
    type:string;
    organisme:Organisme;
}