import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
 name: 'filter'
})

export class SearchPipe implements PipeTransform {
 

  transform(items: any[],
    searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.toLowerCase().includes(searchText);
    });
  }



  
}
