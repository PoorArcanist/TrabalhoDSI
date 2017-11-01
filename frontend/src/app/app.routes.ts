import { RouterModule, Routes } from '@angular/router';

import { ListarComponent} from './listar/listar.component'
import { AddComponent } from './add/add.component';
import { ApagarComponent } from './apagar/apagar.component';
//import { ErroComponent } from './erro/erro.component';

export const appRoutes: Routes = [
  { path: 'cad/novo', component: AddComponent },
  //{ path: 'opcaob/:id', component: OpcaoBComponent },
  { path: 'cad/delete', component: ApagarComponent },
  //{ path: '**', component: ErroComponent }
  { path: 'cad', component: ListarComponent}
];
