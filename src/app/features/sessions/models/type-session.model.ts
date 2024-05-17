import { Habilitation } from './type-habilitation.model';
import { TypeSession } from './type-typesession.model';

export interface Session {
  id: number;
  name: string;
  nbJour: number;
  module: number;
  habilitation: Habilitation;
  typeSession: TypeSession;
}
