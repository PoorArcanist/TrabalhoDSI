import { Component, OnInit } from '@angular/core';
import { AgendaLService } from './agenda.service';
import { Agenda } from './agenda';

@Component({
  selector: 'app-listar',
  templateUrl: 'listar.component.html',
})
export class ListarComponent implements OnInit {
  public alunos: Agenda[] = [];
   public nome = '';
   public telefone = '';


   constructor(private agendaService: AgendaLService) { }

   public ngOnInit() {
     this.carregaTodos();
   }

   public apagarAluno(id: number): void {
     this.agendaService.removeAluno(id)
       .subscribe(res => {
         console.log(res);
         this.carregaTodos();
       },
       err => {
         console.log(err);
       });
   }

   public carregaTodos(): void {
     this.agendaService.loadAgendas()
       .subscribe(res => {
         this.alunos = res;
         console.log('foi');
       },
       err => {
         console.log(err);
       });
   }



 }
