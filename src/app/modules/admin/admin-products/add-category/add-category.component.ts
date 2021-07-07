import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  adminAddCategory!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.adminAddCategory = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.adminAddCategory.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.adminAddCategory.invalid) {
      return;
    }
  }
}
