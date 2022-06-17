import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Pays } from 'src/app/Model/pays';
import { PaysService } from 'src/app/Service/Pays/pays.service';
import { TokenStorageService } from 'src/app/Service/Autho-taken/token-storage.service';

interface table {
  ID        : string;
  Libelle   : String;
}

const ELEMENT_DATA: table[] = [
  {ID: '1', Libelle:'g'},
];

@Component({
  selector: 'app-lister-employe',
  templateUrl: './lister-pays.component.html',
  styleUrls: ['./lister-pays.component.scss'],
 
})

export class ListerPaysComponent implements OnInit {

  dataSource = new MatTableDataSource<table>(ELEMENT_DATA);
  displayedColumns: string[] =  ['ID', 'Libelle','Supprimer'];
  
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  
  constructor(private tokenStorage: TokenStorageService,private formateurService: PaysService,private datePipe: DatePipe, private _snackBar:
     MatSnackBar,public dialog: MatDialog,public dialog1: MatDialog,
      private http: HttpClient, private router: Router, public datepipe: DatePipe) {
  
  }

  openDialog(id:number) {
    const dialogRef = this.dialog.open(SupprimerPays);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){ this.delete(id);}
    });
  }

  pays:Pays[];

  private delete(idformateur:any){
    
      this.formateurService.delete(idformateur).subscribe(
        () => this.pays = this.pays.filter(e => e.id != idformateur),
      );
  }

  loggedIn:boolean=false;



  ngOnInit(): void {
    this.formateurService.getAll().subscribe(
      (result) => {
        this.pays = result;
        console.log(this.pays);
      }
    )
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
export class SupprimerPays {}