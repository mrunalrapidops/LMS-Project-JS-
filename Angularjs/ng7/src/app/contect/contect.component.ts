import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }from '@angular/forms';
@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.scss']
})
export class ContectComponent implements OnInit {
  submitted= false;
  success = false;
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  
  onSubmit(){
    this.submitted = true;
    if(this.messageForm.invalid){
      return;
    }

    this.success = true;
  }

  ngOnInit() {
    this .messageForm = this.formBuilder.group({
      name: ['',Validators.required],
      message: ['',Validators.required],
    })
  
  }

}
