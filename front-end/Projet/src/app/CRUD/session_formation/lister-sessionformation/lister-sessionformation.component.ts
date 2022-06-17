import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from 'src/app/Service/Session/session.service';
import { TokenStorageService } from 'src/app/Service/Autho-taken/token-storage.service';
import { Session } from 'src/app/Model/session';

interface table {
  ID        : Number;
  DateD     : String;
  DateF     : String;
  Lieu      : String;
  Nbr_part  : Number;
  Formateur : Number;
  Formation : Number;
  Organisme : Number;
}

const ELEMENT_DATA: table[] = [
  {ID: 0, DateD:'',DateF:'',Lieu:'',Nbr_part:0,Formateur:0,Formation:0,Organisme:0},
];

@Component({
  selector: 'app-lister-employe',
  templateUrl: './lister-sessionformation.component.html',
  styleUrls: ['./lister-sessionformation.component.scss'],
 
})

export class ListerSessionFormationComponent implements OnInit {

  dataSource = new MatTableDataSource<table>(ELEMENT_DATA);
  displayedColumns: string[] =  ['ID', 'DateD','DateF','Lieu','Nbr_part','Formateur','Formation','Supprimer'];
  
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  
  constructor(private tokenStorage: TokenStorageService,private formateurService: SessionService,private datePipe: DatePipe, private _snackBar:
     MatSnackBar,public dialog: MatDialog,public dialog1: MatDialog,
      private http: HttpClient, private router: Router, public datepipe: DatePipe) {
  
  }

  openDialog(id:number) {
    const dialogRef = this.dialog.open(SupprimerSessionFormation);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){ this.delete(id);}
    });
  }

  pays:Session[];
  session:Session[];

  private delete(idformateur:any){
    
      this.formateurService.delete(idformateur).subscribe(
        () => this.session = this.session.filter(e => e.id != idformateur),
      );
  }

  loggedIn:boolean=false;



  ngOnInit(): void {
    this.formateurService.getAll().subscribe(data => {
      console.log(data);

      this.session = data;
    });
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
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


}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-supprimer.html',
})
export class SupprimerSessionFormation {}