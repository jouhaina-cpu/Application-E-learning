import { Formateur } from "./formateur";
import { Formation } from "./formation";
import { Organisme } from "./organisme";

export class Session{
    id: number;
    lieu: string;
    date_debut: Date;
    date_fin: Date;
    nb_participant: number;
    organisme:Organisme;
    formateur:Formateur;
    formation:Formation;
}