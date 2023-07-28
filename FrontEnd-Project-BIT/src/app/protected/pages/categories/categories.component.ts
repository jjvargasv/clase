import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categories } from '../../interfaces/categories.interface';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categorySelected : Category | null = null;
categories!: Category[];
  
categoryForm: FormGroup = this.fb.group({
  name: [
    '',
    [Validators.required, Validators.minLength(3)]
  ],
  description: [
    '',
    []
  ]

  
})
constructor(private fb: FormBuilder, private CategoriesService: CategoriesService){
    
}
  ngOnInit(): void {
    this.loadCategories();
  }
  createOrUpdate(){
    if(this.categorySelected){
      console.log('debe actualizar');
    }
    else{
      this.createCategory()
    }
  }
  loadCategories(){
    this.CategoriesService.getcategories().subscribe((value)=>{
      console.log(value);
      this.categories = value;
      })
  }
  loadData(category : Category){
    this.categorySelected = category;
    this.categoryForm.patchValue({name: category.name, description: category.description})
  }
createCategory(){
  console.log(this.categoryForm.value);
  this.CategoriesService.createCategory( this.categoryForm.value ).subscribe((value)=>{
    console.log(value);
    this.categoryForm.reset();
    this.loadCategories();
  });
}
eliminarCategory(id:string | undefined){
  this.CategoriesService.deleteCategory(id).subscribe((value)=>{
    console.log(value)
    this.loadCategories()
  })
}
editCategory(category : Category ){
this.CategoriesService.updateCategory(category).subscribe((response)=>{
console.log(response);
})
}
}
