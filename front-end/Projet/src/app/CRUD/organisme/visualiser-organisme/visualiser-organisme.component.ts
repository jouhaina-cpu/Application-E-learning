import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organisme } from 'src/app/Model/organisme';
import { OrganismeService } from 'src/app/Service/Organisme/organisme.service';
  
  @Component({
  selector: 'app-visualiser-employe',
  templateUrl: './visualiser-organisme.component.html',
  styleUrls: ['./visualiser-organisme.component.scss']
})
export class VisualiserOrganismeComponent  {   
 
  element: any;
  idOrganisme: number

  constructor(private organismeservice:OrganismeService, private route: ActivatedRoute) {  
    
    this.idOrganisme = this.route.snapshot.params['id'];

    this.organismeservice.getById(this.idOrganisme).subscribe((data: Organisme[])=>{

      console.log(data);
      this.element=data;

    });
    
  }

}
