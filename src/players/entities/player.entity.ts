export class Player {
  id!: string;
  name!: string;
  team!: string;
  position!: 'GK' | 'DF' | 'MF' | 'FW';
  nationality!: string;
  age!: number;
  jerseyNumber!: number;
  goals!: number;
  assists!: number;
  image!: string;
  marketValue!: string;
}
