import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  JsonLugares: any[]
  JsonFiltro : any[]
  constructor() {
    this.JsonLugares = [
      {Nombre:"Mar Del Túyu",Portada:"/assets/mue.jpg",Slug:"muelle-mdt",Opinion:"Excelente",Peces:["corvina","raya","chucho","burriqueta","brotola","bagre","lenguado"]},
  ];
  this.JsonFiltro = [];
  }



  ngOnInit() {
  }

  filtro(value){
    this.JsonFiltro = [];
    if(value.length > 1){
      console.log("HOLA");
      this.JsonLugares.forEach(element => {
        element.Peces.forEach(elemento => {
          if(elemento.toUpperCase().match(value.toUpperCase())){
            console.log("HOLA2");

            this.JsonFiltro.push(element);
          }
        });
      });
    }
  }

}