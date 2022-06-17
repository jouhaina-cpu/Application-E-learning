import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/Service/User/user.service';
import { TokenStorageService } from 'src/app/Service/Autho-taken/token-storage.service';
import { User } from 'src/app/Model/user';

interface table {
  ID        : Number;
  Email     : String;
  Nom       : String;
  UserName  : String;
}

const ELEMENT_DATA: table[] = [
  {ID: 0, Email:'',Nom:'',UserName:''},
];

@Component({
  selector: 'app-lister-employe',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.scss'],
 
})

export class ListerUserComponent implements OnInit {

  dataSource = new MatTableDataSource<table>(ELEMENT_DATA);
  displayedColumns: string[] =  ['ID','Email','UserName','Supprimer'];
  
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  
  constructor(private tokenStorage: TokenStorageService,private formateurService: UserService,private datePipe: DatePipe, private _snackBar:
     MatSnackBar,public dialog: MatDialog,public dialog1: MatDialog,
      private http: HttpClient, private router: Router, public datepipe: DatePipe) {
  
  }

  openDialog(id:number) {
    const dialogRef = this.dialog.open(SupprimerUser);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){ this.delete(id);}
    });
  }

  private delete(idformateur:any){
    
      this.formateurService.deleteUser(idformateur).subscribe();
  }
 
  loggedIn:boolean=false;
  showEdit:boolean=false;
  formateur:User[];
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
export class SupprimerUser {}