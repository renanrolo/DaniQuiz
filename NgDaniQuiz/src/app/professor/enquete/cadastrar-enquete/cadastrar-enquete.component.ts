import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnqueteService } from '../enquete-service';

@Component({
  selector: 'DQ-cadastrar-enquete',
  templateUrl: './cadastrar-enquete.component.html',
  styleUrls: ['./cadastrar-enquete.component.css']
})
export class CadastrarEnqueteComponent implements OnInit {

  cadastrarForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private enqueteService: EnqueteService) { }

  ngOnInit() {
    this.cadastrarForm = this.formBuilder.group({
      NomeReduzido: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      Titulo: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      Pergunta: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
    });
  }

  submitForm(formulario: any) {
    this.enqueteService.cadastrar(formulario);
  }
}
