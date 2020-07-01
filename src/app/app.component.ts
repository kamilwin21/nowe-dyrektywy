import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   days= ['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'];
   input="";
   dogs= new Array<Dog>();

   constructor(){
     this.dogs.push(new Dog('Reksio', 4),new Dog('Łatek',3),
     new Dog('Burek', 5),new Dog('Tofik', 2),new Dog('Max', 6),
     new Dog('Lucy', 2),new Dog('Lux',1),new Dog('Lolek',1));

   }

   addDogs(){
    this.dogs.push(new Dog('Reksio', 4),new Dog('Łatek',3),
     new Dog('Burek', 5),new Dog('Tofik', 2),new Dog('Max', 6),
     new Dog('Lucy', 2),new Dog('Lux',1),new Dog('Lolek',1));

   }

   removeDogs(){
   this.dogs=[];

   }


}

class Dog{

   constructor(public name:string, public age:number){}
}