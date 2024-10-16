import { Component, OnInit } from '@angular/core';
import { eleve } from '../model/eleve.model';
import { Ecole } from '../model/ecole.model';
import { EleveService } from '../services/eleve.service';

@Component({
  selector: 'app-recherche-par-ecole',
  templateUrl: './recherche-par-ecole.component.html',
  styleUrl: './recherche-par-ecole.component.css'
})

export class RechercheParEcoleComponent implements OnInit{


  IdEcole! : number;
  ecoles! : Ecole[];
  eleves! : eleve[];
 
  constructor(private eleveService : EleveService) { }

  
  ngOnInit(): void {
  
    this.eleveService.listeecoles().subscribe(response => {
      this.ecoles = response._embedded.ecoles; 
      console.log(response);
    });
  }

 
    onChange() {
      
      this.eleveService.rechercherParEcole(this.IdEcole).subscribe(eleveData => {
        this.eleves = eleveData;  
        console.log(this.eleves);
      });
    }

  
}
