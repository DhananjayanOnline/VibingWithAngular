import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  constructor(private service:TaskService){}

  taskForm = new FormGroup({
    "task_name": new FormControl("", [Validators.required])
  })

  get task_name(){
    return this.taskForm.get("task_name")
  }

  createTask(){
    let data=this.taskForm.value
    this.service.addTask(data).then((res:any)=> res.json()).then(data=> console.log("TASK CREATED!!!!")).catch(err=> alert(err))
  }
  

}
