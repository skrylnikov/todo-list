import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!';
  text:string = "kek"
  array:string[] = ["test"]
  constructor (){
    //this.array[this.array.length]= "test 1"
    this.load()
  }

  but(){
    //this.text="lol";
    this.array[this.array.length]=this.text;
  } 
  save(){
    localStorage.setItem("data", JSON.stringify(this.array))
  }

  load(){
    if(localStorage.getItem("data")!=null)
      this.array=JSON.parse(localStorage.getItem("data"))
  }
  delete(){
    localStorage.setItem("data", JSON.stringify([]))
  }
  del(i){
    this.array.splice(i,1)
  }
}
