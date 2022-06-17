import { Domaine } from "./domaine";

export class Formation {
    id :number;
    title :string;
    duree:number;
    nb_session:number;
    budget:number;
    type:string;
    domaine:Domaine;
}