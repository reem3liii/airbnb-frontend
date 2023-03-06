import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private myClient: HttpClient) { }
  private BaseURL ="https://localhost:7174/api/getAll/";
  //Methods
  //Get all places
  getAllPlaces(){
    return this.myClient.get(this.BaseURL);
  }
}
