import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'src/app/Model/formateur';
import { FormateurService } from 'src/app/Service/Formateur/formateur.service';

  @Component({
  selector: 'app-visualiser-employe',
  templateUrl: './visualiser-formateur.component.html',
  styleUrls: ['./visualiser-formateur.component.scss']
})
export class VisualiserFormateurComponent {   
 
  element: any;
  idDomaine: number
  constructor(private domaineservice:FormateurService, private route: ActivatedRoute){

    this.idDomaine = this.route.snapshot.params['id'];

    this.domaineservice.get(this.idDomaine).subscribe((data: Formateur)=>{

      console.log(data);
      this.element=data;

    });
  }

}
