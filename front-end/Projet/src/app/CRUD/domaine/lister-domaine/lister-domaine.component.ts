import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Domaine } from 'src/app/Model/domaine';
import { DomaineService } from 'src/app/Service/Domaine/domaine.service';
import { TokenStorageService } from 'src/app/Service/Autho-taken/token-storage.service';
import { User } from 'src/app/Model/user';

 interface table {
  Id: number;
  NomDomaine: string;  
}

const ELEMENT_DATA: table[] = [
  {Id:0 , NomDomaine: ''},
];

@Component({
  selector: 'app-lister-employe',
  templateUrl: './lister-domaine.component.html',
  styleUrls: ['./lister-domaine.component.scss'],
 
})

export class ListeDomaineComponent implements OnInit {

  domaines : Domaine[];

  dataSource = new MatTableDataSource<table>(ELEMENT_DATA);
  displayedColumns: string[] =  ['NomDomaine', 'Supprimer'];
  
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private domaineService: DomaineService,private tokenStorage: TokenStorageService,public dialog1: MatDialog,private domaineeService:DomaineService,public dialog: MatDialog, private _snackBar: MatSnackBar, public datepipe: DatePipe) {
    this.ouvrirMessageChargement();
  }

  openDialog(id:number) {
    const dialogRef = this.dialog.open(ListeDomaine);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){ this.delete(id);}
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  private delete(idDomaine:any){
   
      this.domaineService.deleteDomaine(idDomaine).subscribe(
        () => this.domaines = this.domaines.filter(e => e.id != idDomaine),
      );
  }
  
  // message indiquant chargement de page
  ouvrirMessageChargement() {
    this._snackBar.open('1 seconde', '', {
      duration: 100,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
 
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loggedIn:boolean=false;
  showEdit:boolean=false;
  domaine:Domaine;

  index:any;


  ngOnInit(): void {
    this.domaineService.getAll().subscribe(
      (result) => {
        this.domaines = result;
        console.log(this.domaines);
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  
  }

}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class ListeDomaine {}
