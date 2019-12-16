import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatBottomSheet} from '@angular/material';
import { ToBottomSheetModule } from './app/to-bottom-sheet/to-bottom-sheet.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  BottomSheet: any;
 
  constructor(private _formBuilder: FormBuilder,bottomSheet: MatBottomSheet) {}
 
  showBottomSheet() {
    this.BottomSheet.open(ToBottomSheetModule);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
 
}
