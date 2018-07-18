import { Component,  OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTable, MatSort, MatTableDataSource} from '@angular/material';

export interface tableData {
  position: number,
  name: string,
  duration: number,
  durationType: string,
  predecessor: number[],
  worker: string,
  startdate: string,
  endDate: string,
  statusPercentage: number,
  statusText: string
}

const ELEMENT_DATA = [
  {
    position: 0,
    name: "aS",
    duration: 1,
    durationType:'Hours',
    predecessor: [0],
    worker: 'adithya',
    startdate: '11/12/2012',
    endDate: '12/12/2012',
    statusPercentage: 56,
    statusText: 'half',
    show: true

  },
  {
    position: 1,
    name: "aS",
    duration: 12,
    durationType:'Hours',
    predecessor: [0],
    worker: 'adithya',
    startdate: '12/12/2012',
    endDate: '13/12/2012',
    statusPercentage: 0,
    statusText: 'half',
             show: true

  },
  {
    position: 2,
    name: "aSdaf",
    duration: 1,
    durationType:'Hours',
    predecessor: [1],
    worker: 'adithya',
    startdate: '12/12/2012',
    endDate: '14/12/2012',
    statusPercentage: 56,
    statusText: 'half',
    show: true

  },
  {
    position: 3,
    name: "asafgS",
    duration: 4,
    durationType:'days',
    predecessor: [3],
    worker: 'adithya',
    startdate: '14/12/2012',
    endDate: '20/12/2012',
    statusPercentage: 56,
    statusText: 'half',
    show: false

  }
]

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})



export class AboutComponent implements OnInit{
  displayedColumns: string[] = [
    "Sn. No",
     "Name",
       "Duration",
    "Predecessor",
    "Worker",
    "Start Date",
    "End Date",
    "Completion %",
    "Status",
  "Actions"];


    @ViewChild(MatTable) table: MatTable<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

localData = []
dataSource = new MatTableDataSource(this.localData);

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  //  this.localData = ELEMENT_DATA;


  }

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  dropdownSearch =['aparna','adithya','benjamin']

  model = {name: '', worker: '',
  type: 'regular',risk:'Medium',observer:'',startDate: ''};
  constructor() { }




  addPhase(){
    this.localData.push(
      {
        position: 90,
        name: '',
        pstartDate: '',
        taskData: []


    )
    console.log(this.localData)
      this.dataSource = new MatTableDataSource(this.localData);

    this.table.renderRows();

  }

  addTask(i){
    this.localData[i].show= true
    this.localData[i].taskData.push(
      {

            position: 90,
            name: '',
        duration: 1,
        durationType:'hour',
        predecessor: [0],
        worker: '',
        startdate: '11/12/2012',
        endDate: '12/12/2012',
        statusPercentage: 0,
        statusText: '-'

      }

    )
    console.log(this.localData)


  }



onSubmit(){}

toggle(element) {
  if(element.show === true)  {
    element.show = false;

  }else {
    element.show = true;

  }

  // CHANGE THE NAME OF THE BUTTON.

}

}
