import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';
import { Coord } from '../../models/Item';
import { Weather } from '../../models/Item';
import { GetApiService } from '../../get-api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    coord: null,
    weather: null,
    base: "",
    main: null,
    visibility: null,
    wind: null,
    clouds: null,
    dt: null,
    sys: null,
    timezone: null,
    name: "",
    cod: null,
    note: ""

  }
  
  
  constructor(private itemService: ItemService, private api: GetApiService) { }

  ngOnInit(): void {
    this.api.apiCall().subscribe((data:any) => {
      console.warn("data from OpenWeatherMap", data);
      this.item = data;
    })
  }
  
  onSubmit(){
    console.log(this.item.name);
    if(this.item.name != '' && this.item.timezone!=null){
      this.itemService.addItem(this.item);
      this.item.note = '';
      


    }
  }

}
