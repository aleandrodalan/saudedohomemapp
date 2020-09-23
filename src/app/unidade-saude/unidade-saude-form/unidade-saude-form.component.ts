import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/endereco/endereco';
import { UnidadeSaude } from '../unidade-saude';
import { UnidadeSaudeService } from '../unidade-saude.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { EnderecoService } from 'src/app/endereco/endereco.service';

@Component({
  selector: 'app-unidade-saude-form',
  templateUrl: './unidade-saude-form.component.html',
  styleUrls: ['./unidade-saude-form.component.css']
})
export class UnidadeSaudeFormComponent implements OnInit {

  unidadeSaude: UnidadeSaude;
  
  id: number;

  success: boolean;
  errors: string[];

  constructor(private unidadeSaudeService: UnidadeSaudeService,
              private enderecoService: EnderecoService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.adicionarNovaUnidadeSaude();    

    let params: Observable<Params> = this.activatedRoute.params;
    
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      
      if (this.id) {
        this.unidadeSaudeService
          .getUnidadeSaudeById(this.id)
          .subscribe(
            response => { 
              this.unidadeSaude = response;

              if (this.unidadeSaude.endereco == null)
                this.unidadeSaude.endereco = new Endereco();
            },
            errorResponse => this.unidadeSaude = new UnidadeSaude()
          )
      }
    })    
  }

  adicionarNovaUnidadeSaude(): void {
    this.unidadeSaude = new UnidadeSaude();
  }

  salvarUnidadeSaude() {
    if (this.id) {
      this.unidadeSaudeService
        .updateUnidadeSaude(this.unidadeSaude)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.adicionarNovaUnidadeSaude();
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        })
    } else {
      this.unidadeSaudeService
        .saveUnidadeSaude(this.unidadeSaude)
        .subscribe(response => {
          this.success = true; 
          this.errors = null;   
          this.adicionarNovaUnidadeSaude();        
        }, errorResponse => {
          console.log(errorResponse.error);
          this.success = false;
          this.errors = errorResponse.error.errors;
        });
    }
  }

  onSubmit() {
    this.salvarUnidadeSaude();    
  }  

  onBlurCep() {
    this.enderecoService
      .getEnderecoByCepRest(this.unidadeSaude.endereco.cep)
      .subscribe(response => {
        this.unidadeSaude.endereco = response;
      });
  }
}