import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../services/bank.service';


@Component({
  selector: 'app-createbankaccount',
  templateUrl: './createbankaccount.component.html',
  styleUrls: ['./createbankaccount.component.css']
})
export class CreatebankaccountComponent implements OnInit {

  bankForm: FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder, private bankService: BankService ) { }

  ngOnInit(): void {
    
    this.bankForm = this.formBuilder.group({
      account_holder: [null, Validators.required],
      accounttype: [''],
      fathers_name: [''],
    });

  }

  createbank(formValues){
    formValues.mode = 'Save';
    this.submitted = true;
    this.bankService.AddAccount(formValues)
    .subscribe(res => {
      console.log('created',res);
    });
      
  }

  onReset() {
    this.submitted = false;
    this.bankForm.reset();
  }

}
