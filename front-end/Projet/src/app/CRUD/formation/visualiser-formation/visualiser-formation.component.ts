import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/Model/formation';
import { FormationService } from 'src/app/Service/Formation/formation.service';

  @Component({
  selector: 'app-visualiser-employe',
  templateUrl: './visualiser-formation.component.html',
  styleUrls: ['./visualiser-formation.component.scss']
})
export class VisualiserFormationComponent {   
 
  element: any;
  idDomaine: number
  constructor(private domaineservice:FormationService, private route: ActivatedRoute){

    this.idDomaine = this.route.snapshot.params['id'];

    this.domaineservice.get(this.idDomaine).subscribe((data: Formation)=>{

      console.log(data);
      this.element=data;

    });
  }


}
