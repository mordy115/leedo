import { Component, OnInit } from '@angular/core';
import { BaseApiService } from '../services/base-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _EMPLOYEES =[];
  EMPLOYEES =[];
  EMPLOYEESForm!: FormGroup;
  errormas:any;
  constructor(private BaseApiService:BaseApiService) { }

  ngOnInit(): void {
    this.BaseApiService.ALL_EMPLOYEES().subscribe(
      (res)=> {
        console.log(res);

        return this.EMPLOYEES = res
      })
    this.EMPLOYEESForm= new FormGroup({
        name: new FormControl('', [
          Validators.required,
        ]),
        Date: new FormControl('', [
          Validators.required,
        ]),
        department: new FormControl('', [
          Validators.required,
        ]),
        salary: new FormControl('', [
          Validators.required,
        ]),
        experience: new FormControl('', [
          Validators.required,
        ]),
      });
  }
  FILLTER_EMPLOYEES(form:any,status:any){
    console.log(form);

    // this is supposed to do the function by back end developer
    if(status !== "INVALID"){
      let name = form.name;
      let date = form.Date;
      let Department = form.department;
      let Salary = form.salary;
      let Experience = form.experience
    let EMPLOYEES_FIL_name = this.EMPLOYEES.filter((el:any)=>{
      return el.name ===name;
    })
    console.log(EMPLOYEES_FIL_name);
    if(EMPLOYEES_FIL_name.length > 0){
      this._EMPLOYEES = EMPLOYEES_FIL_name ;
      let EMPLOYEES_FIL_date= this._EMPLOYEES.filter((el:any)=>{
        return el.Join_Date=== date
      });
      console.log(EMPLOYEES_FIL_date);

      if( EMPLOYEES_FIL_date.length  > 0){
        this._EMPLOYEES = EMPLOYEES_FIL_date;
        let EMPLOYEES_FIL_Department= this._EMPLOYEES.filter((el:any)=>{
          return el.Department=== Department
        })

        if(EMPLOYEES_FIL_Department.length > 0){
          this._EMPLOYEES = EMPLOYEES_FIL_Department;
          let EMPLOYEES_FIL_Salary= this._EMPLOYEES.filter((el:any)=>{
            return el.Salary=== Salary
          });
          if(EMPLOYEES_FIL_Salary.length  > 0){
            this._EMPLOYEES = EMPLOYEES_FIL_Salary;
            let EMPLOYEES_FIL_Experience= this._EMPLOYEES.filter((el:any)=>{
             return el.Experience === Experience;
            });
           console.log(EMPLOYEES_FIL_Experience);


            if(EMPLOYEES_FIL_Experience.length > 0){
             this._EMPLOYEES =EMPLOYEES_FIL_Experience;
            }else{
              this._EMPLOYEES = [];
              console.log(this._EMPLOYEES);

            }
          }else{
            this._EMPLOYEES = [];
            console.log(this._EMPLOYEES);

          }
        }else{
          this._EMPLOYEES = [];
          console.log(this._EMPLOYEES);
        }
      }else{

        this._EMPLOYEES = [];
        console.log(this._EMPLOYEES);

      }
    }
    console.log(this._EMPLOYEES);
    }else{
        this.errormas = "check the form !!"
    }


  }

}
