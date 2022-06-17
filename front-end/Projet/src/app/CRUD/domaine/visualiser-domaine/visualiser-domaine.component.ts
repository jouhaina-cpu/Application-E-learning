import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Domaine } from 'src/app/Model/domaine';
import { DomaineService } from 'src/app/Service/Domaine/domaine.service';
  @Component({
  selector: 'app-visualiser-employe',
  templateUrl: './visualiser-domaine.component.html',
  styleUrls: ['./visualiser-domaine.component.scss']
})
export class VisualiserDomaineComponent  {   
 
  element: any;
  idDomaine: number
  constructor(private domaineservice:DomaineService, private route: ActivatedRoute){

    this.idDomaine = this.route.snapshot.params['id'];

    this.domaineservice.getById(this.idDomaine).subscribe((data: Domaine[])=>{

      console.log(data);
      this.element=data;

    });
  }
   


  

}
