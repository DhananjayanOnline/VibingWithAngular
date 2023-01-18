import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  allTasks:any

  constructor(private service:TaskService){}

  ngOnInit(): void {
      this.service.listTask().then((res:any)=> res.json()).then(data=> this.allTasks=data).catch(err=> alert(err))
  }
}

