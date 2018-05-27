import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  ELEMENT_DATA: Observable<any[]>;
  displayedColumns = [ 'name', 'totalPoints' ];
  dataSource;
  coll;

  constructor(afs: AngularFirestore) {
    this.coll = afs.collection( 'fbusers' , ref => ref.orderBy('campus.totalPoints', 'desc' ).limit(10) ).valueChanges();
    this.coll.subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.filterPredicate = function ( data2 , filter ): boolean {
      return ( data2.name + data2.campus.totalPoints).toLowerCase().includes(filter);
    };
    });
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
