import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Organisme } from 'src/app/Model/organisme';
import { OrganismeService } from 'src/app/Service/Organisme/organisme.service';
 
 interface table {
  ID        : string;
  Libelle   : String;
}

const ELEMENT_DATA: table[] = [
  {ID: '1', Libelle:'g'},
];

@Component({
  selector: 'app-lister-employe',
  templateUrl: './lister-organisme.component.html',
  styleUrls: ['./lister-organisme.component.scss'],
 
})

export class ListerOrganismeComponent implements OnInit {

  organisme : Organisme[];

  dataSource = new MatTableDataSource<table>(ELEMENT_DATA);
  displayedColumns: string[] =  ['ID', 'Libelle','Supprimer'];
  
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  constructor(public dialog: MatDialog,private organismeeService:OrganismeService,) {
 
  }

  private getOrganismee(){
    this.organismeeService.get().subscribe(data => {
      console.log(data);

      this.organisme = data;
    });
  }

  openDialog(id : number) {
    const dialogRef = this.dialog.open(SupprimerOrganisme);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){ this.deleteOrganismee(id);}
    });
  }

  private deleteOrganismee(id:number){
    this.organismeeService.deleteOrganisme(id).subscribe( data => {
      this.getOrganismee();
    })
  
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnInit(): void {
    this.getOrganismee();
  }
  
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class SupprimerOrganisme {}