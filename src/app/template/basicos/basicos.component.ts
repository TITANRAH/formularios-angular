import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){
    
    console.log(form.value);
    

  }

}
