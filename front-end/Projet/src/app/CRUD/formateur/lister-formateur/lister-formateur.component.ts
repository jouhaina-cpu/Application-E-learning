import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Formateur } from 'src/app/Model/formateur';
import { FormateurService } from 'src/app/Service/Formateur/formateur.service';
import { TokenStorageService } from 'src/app/Service/Autho-taken/token-storage.service';

interface table {
  ID        : Number;
  Email     : String;
  Nom       : String;
  Prenom    : String;
  tel       : Number;
  Type      : String;
  Organisme : Number;
}

const ELEMENT_DATA: table[] = [
  {ID: 1, Email:'',Nom:'',Prenom:'',tel:0,Type:'',Organisme:0},
];

@Component({
  selector: 'app-lister-employe',
  templateUrl: './lister-formateur.component.html',
  styleUrls: ['./lister-formateur.component.scss'],
 
})

export class ListerFormateurComponent implements OnInit {

  dataSource = new MatTableDataSource<table>(ELEMENT_DATA);
  displayedColumns: string[] =  ['ID', 'Email','Nom','Prenom','tel','Type','Organisme','Supprimer'];
  
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  
  constructor(private tokenStorage: TokenStorageService,private formateurService: FormateurService,private datePipe: DatePipe, private _snackBar:
     MatSnackBar,public dialog: MatDialog,public dialog1: MatDialog,
      private http: HttpClient, private router: Router, public datepipe: DatePipe) {
  
  }

  openDialog(id:number) {
    const dialogRef = this.dialog.open(SupprimerFormateur);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){ this.delete(id);}
    });
  }

  private delete(idformateur:any){
    
      this.formateurService.delete(idformateur).subscribe(
        () => this.formateur = this.formateur.filter(e => e.id != idformateur),
      );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
  loggedIn:boolean=false;
  showEdit:boolean=false;
  formateur:Formateur[];
  index:any;


  ngOnInit(): void {
    this.formateurService.getAll().subscribe(
      (result) => {
        this.formateur = result;
        console.log(this.formateur);
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
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
export class SupprimerFormateur {}