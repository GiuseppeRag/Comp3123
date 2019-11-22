import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    console.log(f.form.get('firstName').value);
    console.log(f.form.get('comment').value);
    this.router.navigateByUrl('/students');
  }

}
