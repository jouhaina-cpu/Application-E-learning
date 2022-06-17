import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FormationService } from 'src/app/Service/Formation/formation.service';
import { TokenStorageService } from 'src/app/Service/Autho-taken/token-storage.service';
import { Formation } from 'src/app/Model/formation';

interface table {
  ID            :Number;
  Annee         :String;
  budget        :Number;
  duree         :Number;
  nb_session    :Number;
  titre         :String;
  type_formation:String;
  domaine_id    :number;
}

const ELEMENT_DATA: table[] = [
  {ID: 0, Annee:'g',budget:0,duree:0,nb_session:0,titre:'',type_formation:'',domaine_id:0},
];

@Component({
  selector: 'app-lister-employe',
  templateUrl: './lister-formation.component.html',
  styleUrls: ['./lister-formation.component.scss'],
 
})

export class ListerFormationComponent implements OnInit {

  dataSource = new MatTableDataSource<table>(ELEMENT_DATA);
  displayedColumns: string[] =  ['ID', 'budget','duree','nb_session','type_formation','domaine_id','Supprimer'];
  
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  
  constructor(private tokenStorage: TokenStorageService,private formateurService: FormationService,private datePipe: DatePipe, private _snackBar:
     MatSnackBar,public dialog: MatDialog,public dialog1: MatDialog,
      private http: HttpClient, private router: Router, public datepipe: DatePipe) {
  
  }

  openDialog(id:number) {
    const dialogRef = this.dialog.open(SupprimerFormation);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){ this.delete(id);}
    });
  }

  formation:Formation[];

  private delete(idformateur:any){
    
      this.formateurService.delete(idformateur).subscribe(
        () => this.formation = this.formation.filter(e => e.id != idformateur),
      );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loggedIn:boolean=false;
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.formateurService.getAll().subscribe(
      (result) => {
        this.formation = result;
        console.log(this.formation);
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-supprimer.html',
})
export class SupprimerFormation {}