import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {bounceOutLeft} from 'app/animations/bounceOutLeft';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  animations: [ bounceOutLeft ]
})
export class LeaderboardComponent implements OnInit {
  ELEMENT_DATA: Observable<any[]>;
  displayedColumns = [ 'name', 'totalPoints' ];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(afs: AngularFirestore) {
    this.dataSource = afs.collection( 'fbusers' , ref => ref.orderBy('campus.totalPoints', 'desc' ).limit(10) ).valueChanges();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
