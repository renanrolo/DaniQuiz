import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnqueteService } from '../enquete-service';
import { Router } from '@angular/router';

@Component({
  selector: 'DQ-cadastrar-enquete',
  templateUrl: './cadastrar-enquete.component.html',
  styleUrls: ['./cadastrar-enquete.component.css']
})
export class CadastrarEnqueteComponent implements OnInit {

  cadastrarForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private enqueteService: EnqueteService,
    private route: Router) { }

  ngOnInit() {
    this.cadastrarForm = this.formBuilder.group({
      NomeReduzido: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      Titulo: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      Pergunta: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
    });
  }

  submitForm(formulario: any) {
    this.enqueteService.cadastrar(formulario)
      .subscribe(envelope => {

        console.log("envelope", envelope)
        if (envelope.status === true) {
          this.route.navigate(['/professor/enquete']);
        }

      });
  }

}
