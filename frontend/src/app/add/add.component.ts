import { Component, OnInit } from '@angular/core';
import { AgendaService } from './agenda.service';
import { Agenda } from './agenda';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {
   public alunos: Agenda[] = [];
   public nome = '';
   public telefone = '';

   constructor(private agendaService: AgendaService) { }

   public ngOnInit() {

   }

   public salvarContato(): void {
     console.log('oi');

     const aluno = new Agenda();
     aluno.nome = this.nome;
     aluno.telefone = this.telefone;

     this.agendaService.addAgenda(aluno)
       .subscribe(res => {
         console.log(res);

       },
       err => {
         console.log(err);
       });

   }





  }
