import { Pays } from "./pays";
import { Profile } from "./profile";

export class Participant {
    id : number;
    nom : string;
    prenom : string;
    email : string;
    telephone : number;
    type : string;
    profil : Profile;
    pays : Pays;
}