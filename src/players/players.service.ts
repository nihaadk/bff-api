import { Injectable, NotFoundException } from '@nestjs/common';
import { Player } from './entities/player.entity';
import { UuidService } from 'nestjs-uuid/dist/lib/services/uuid-generator.service';

@Injectable()
export class PlayersService {
  private PLAYERS: Player[] = [
    {
      id: '1',
      name: 'Nikola Vasilj',
      team: 'FC St. Pauli',
      nationality: 'Bosnia & Herzegovina',
      position: 'GK',
      jerseyNumber: 1,
      age: 30,
      marketValue: '€4.50m',
      goals: 0,
      assists: 0,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=NikolaVasilj&backgroundColor=002395&hairColor=FECC02&skinColor=f2d3b1',
    },
    {
      id: '2',
      name: 'Martin Zlomislic',
      team: 'HNK Rijeka',
      nationality: 'Bosnia & Herzegovina',
      position: 'GK',
      jerseyNumber: 22,
      age: 27,
      marketValue: '€2.00m',
      goals: 0,
      assists: 0,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=MartinZlomislic&backgroundColor=002395&hairColor=6c4a2a&skinColor=f2d3b1',
    },
    {
      id: '3',
      name: 'Osman Hadzikic',
      team: 'Slaven Belupo Koprivnica',
      nationality: 'Bosnia & Herzegovina',
      position: 'GK',
      jerseyNumber: 12,
      age: 30,
      marketValue: '€400k',
      goals: 0,
      assists: 0,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=OsmanHadzikic&backgroundColor=002395&hairColor=1c1c1c&skinColor=ae5d29',
    },
    {
      id: '4',
      name: 'Tarik Muharemović',
      team: 'US Sassuolo',
      nationality: 'Bosnia & Herzegovina',
      position: 'DF',
      jerseyNumber: 4,
      age: 23,
      marketValue: '€20.00m',
      goals: 1,
      assists: 2,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=TarikMuharemovic&backgroundColor=002395&hairColor=1c1c1c&skinColor=ae5d29',
    },
    {
      id: '5',
      name: 'Sead Kolašinac',
      team: 'Atalanta BC',
      nationality: 'Bosnia & Herzegovina',
      position: 'DF',
      jerseyNumber: 5,
      age: 32,
      marketValue: '€6.00m',
      goals: 2,
      assists: 4,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=SeadKolasinac&backgroundColor=002395&hairColor=1c1c1c&skinColor=f2d3b1',
    },
    {
      id: '6',
      name: 'Nidal Celik',
      team: 'RC Lens',
      nationality: 'Bosnia & Herzegovina',
      position: 'DF',
      jerseyNumber: 3,
      age: 19,
      marketValue: '€4.00m',
      goals: 0,
      assists: 1,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=NidalCelik&backgroundColor=002395&hairColor=1c1c1c&skinColor=f2d3b1',
    },
    {
      id: '7',
      name: 'Stjepan Radeljic',
      team: 'HNK Rijeka',
      nationality: 'Bosnia & Herzegovina',
      position: 'DF',
      jerseyNumber: 21,
      age: 28,
      marketValue: '€2.80m',
      goals: 1,
      assists: 0,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=StjepanRadeljic&backgroundColor=002395&hairColor=6c4a2a&skinColor=f2d3b1',
    },
    {
      id: '8',
      name: 'Nikola Katić',
      team: 'FC Schalke 04',
      nationality: 'Bosnia & Herzegovina',
      position: 'DF',
      jerseyNumber: 18,
      age: 29,
      marketValue: '€1.80m',
      goals: 1,
      assists: 0,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=NikolaKatic&backgroundColor=002395&hairColor=FECC02&skinColor=f2d3b1',
    },
    {
      id: '9',
      name: 'Dennis Hadzikadunic',
      team: 'UC Sampdoria',
      nationality: 'Bosnia & Herzegovina',
      position: 'DF',
      jerseyNumber: 2,
      age: 27,
      marketValue: '€1.30m',
      goals: 0,
      assists: 1,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=DennisHadzikadunic&backgroundColor=002395&hairColor=6c4a2a&skinColor=f2d3b1',
    },
    {
      id: '10',
      name: 'Nihad Mujakic',
      team: 'Gaziantep FK',
      nationality: 'Bosnia & Herzegovina',
      position: 'DF',
      jerseyNumber: 16,
      age: 28,
      marketValue: '€1.20m',
      goals: 0,
      assists: 2,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=NihadMujakic&backgroundColor=002395&hairColor=1c1c1c&skinColor=ae5d29',
    },
    {
      id: '11',
      name: 'Amar Dedić',
      team: 'SL Benfica',
      nationality: 'Bosnia & Herzegovina',
      position: 'DF',
      jerseyNumber: 7,
      age: 23,
      marketValue: '€15.00m',
      goals: 3,
      assists: 7,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=AmarDedic&backgroundColor=002395&hairColor=1c1c1c&skinColor=f2d3b1',
    },
    {
      id: '12',
      name: 'Amir Hadžiahmetović',
      team: 'Hull City',
      nationality: 'Bosnia & Herzegovina',
      position: 'MF',
      jerseyNumber: 14,
      age: 29,
      marketValue: '€4.20m',
      goals: 4,
      assists: 5,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=AmirHadziahmetovic&backgroundColor=002395&hairColor=1c1c1c&skinColor=ae5d29',
    },
    {
      id: '13',
      name: 'Ivan Šunjić',
      team: 'Pafos FC',
      nationality: 'Bosnia & Herzegovina',
      position: 'MF',
      jerseyNumber: 17,
      age: 29,
      marketValue: '€1.80m',
      goals: 1,
      assists: 3,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=IvanSunjic&backgroundColor=002395&hairColor=6c4a2a&skinColor=f2d3b1',
    },
    {
      id: '14',
      name: 'Dzenis Burnic',
      team: 'Karlsruher SC',
      nationality: 'Bosnia & Herzegovina',
      position: 'MF',
      jerseyNumber: 6,
      age: 27,
      marketValue: '€1.20m',
      goals: 2,
      assists: 4,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=DzenisBurnic&backgroundColor=002395&hairColor=1c1c1c&skinColor=f2d3b1',
    },
    {
      id: '15',
      name: 'Benjamin Tahirović',
      team: 'Bröndby IF',
      nationality: 'Bosnia & Herzegovina',
      position: 'MF',
      jerseyNumber: 8,
      age: 23,
      marketValue: '€4.50m',
      goals: 5,
      assists: 8,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=BenjaminTahirovic&backgroundColor=002395&hairColor=1c1c1c&skinColor=ae5d29',
    },
    {
      id: '16',
      name: 'Armin Gigović',
      team: 'BSC Young Boys',
      nationality: 'Bosnia & Herzegovina',
      position: 'MF',
      jerseyNumber: 13,
      age: 24,
      marketValue: '€2.50m',
      goals: 3,
      assists: 6,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=ArminGigovic&backgroundColor=002395&hairColor=6c4a2a&skinColor=f2d3b1',
    },
    {
      id: '17',
      name: 'Ivan Basic',
      team: 'FC Astana',
      nationality: 'Bosnia & Herzegovina',
      position: 'MF',
      jerseyNumber: 15,
      age: 24,
      marketValue: '€1.20m',
      goals: 2,
      assists: 3,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=IvanBasic&backgroundColor=002395&hairColor=FECC02&skinColor=f2d3b1',
    },
    {
      id: '18',
      name: 'Amar Memić',
      team: 'FC Viktoria Plzen',
      nationality: 'Bosnia & Herzegovina',
      position: 'MF',
      jerseyNumber: 16,
      age: 25,
      marketValue: '€4.50m',
      goals: 6,
      assists: 9,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=AmarMemic&backgroundColor=002395&hairColor=1c1c1c&skinColor=ae5d29',
    },
    {
      id: '19',
      name: 'Ermin Mahmić',
      team: 'FC Slovan Liberec',
      nationality: 'Bosnia & Herzegovina',
      position: 'MF',
      jerseyNumber: 8,
      age: 21,
      marketValue: '€2.50m',
      goals: 3,
      assists: 5,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=ErminMahmic&backgroundColor=002395&hairColor=1c1c1c&skinColor=f2d3b1',
    },
    {
      id: '20',
      name: 'Kerim Alajbegović',
      team: 'Red Bull Salzburg',
      nationality: 'Bosnia & Herzegovina',
      position: 'FW',
      jerseyNumber: 19,
      age: 18,
      marketValue: '€15.00m',
      goals: 8,
      assists: 6,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=KerimAlajbegovic&backgroundColor=002395&hairColor=1c1c1c&skinColor=ae5d29',
    },
    {
      id: '21',
      name: 'Esmir Bajraktarević',
      team: 'PSV Eindhoven',
      nationality: 'Bosnia & Herzegovina',
      position: 'FW',
      jerseyNumber: 20,
      age: 21,
      marketValue: '€5.00m',
      goals: 7,
      assists: 5,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=EsmirBajraktarevic&backgroundColor=002395&hairColor=1c1c1c&skinColor=f2d3b1',
    },
    {
      id: '22',
      name: 'Ermedin Demirović',
      team: 'VfB Stuttgart',
      nationality: 'Bosnia & Herzegovina',
      position: 'FW',
      jerseyNumber: 10,
      age: 28,
      marketValue: '€22.00m',
      goals: 18,
      assists: 7,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=ErmedinDemirovic&backgroundColor=002395&hairColor=6c4a2a&skinColor=ae5d29',
    },
    {
      id: '23',
      name: 'Haris Tabakovic',
      team: 'Borussia Mönchengladbach',
      nationality: 'Bosnia & Herzegovina',
      position: 'FW',
      jerseyNumber: 23,
      age: 31,
      marketValue: '€3.00m',
      goals: 14,
      assists: 3,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=HarisTabakovic&backgroundColor=002395&hairColor=1c1c1c&skinColor=f2d3b1',
    },
    {
      id: '24',
      name: 'Jovo Lukić',
      team: 'FC Universitatea Cluj',
      nationality: 'Bosnia & Herzegovina',
      position: 'FW',
      jerseyNumber: 9,
      age: 27,
      marketValue: '€1.50m',
      goals: 9,
      assists: 2,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=JovoLukic&backgroundColor=002395&hairColor=6c4a2a&skinColor=f2d3b1',
    },
    {
      id: '25',
      name: 'Samed Bazdar',
      team: 'Jagiellonia Bialystok',
      nationality: 'Bosnia & Herzegovina',
      position: 'FW',
      jerseyNumber: 11,
      age: 22,
      marketValue: '€1.50m',
      goals: 10,
      assists: 4,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=SamedBazdar&backgroundColor=002395&hairColor=1c1c1c&skinColor=ae5d29',
    },
    {
      id: '26',
      name: 'Edin Džeko',
      team: 'Fenerbahçe SK',
      nationality: 'Bosnia & Herzegovina',
      position: 'FW',
      jerseyNumber: 9,
      age: 39,
      marketValue: '€1.50m',
      goals: 25,
      assists: 8,
      image:
        'https://api.dicebear.com/9.x/adventurer/svg?seed=EdinDzeko&backgroundColor=002395&hairColor=1c1c1c&skinColor=f2d3b1',
    },
  ];

  constructor(private readonly uuidService: UuidService) {}

  findAll(): Player[] {
    return this.PLAYERS;
  }

  // ID ist jetzt ein string
  findOne(id: string): Player {
    const player = this.PLAYERS.find((p) => p.id === id);
    if (!player) {
      throw new NotFoundException(`Spieler mit ID ${id} wurde nicht gefunden.`);
    }
    return player;
  }

  create(createPlayerDto: Partial<Player>): Player {
    const newPlayer: Player = {
      id: this.uuidService.generate(),
      name: createPlayerDto.name || 'Unbekannter Spieler',
      team: createPlayerDto.team || 'Vereinslos',
      position: createPlayerDto.position || 'MF',
      nationality: createPlayerDto.nationality || 'Unbekannt',
      age: createPlayerDto.age || 0,
      jerseyNumber: createPlayerDto.jerseyNumber || 99,
      goals: createPlayerDto.goals ?? 0,
      assists: createPlayerDto.assists ?? 0,
      image: createPlayerDto.image || 'https://via.placeholder.com/150',
      marketValue: createPlayerDto.marketValue || '0 €',
    };

    this.PLAYERS.push(newPlayer);
    return newPlayer;
  }

  update(id: string, updatePlayerDto: Partial<Player>): Player {
    const player = this.findOne(id);
    Object.assign(player, updatePlayerDto);
    return player;
  }

  remove(id: string): { message: string } {
    const initialLength = this.PLAYERS.length;
    this.PLAYERS = this.PLAYERS.filter((p) => p.id !== id);

    if (this.PLAYERS.length === initialLength) {
      throw new NotFoundException(`Player with ID ${id} does not exist.`);
    }

    return { message: `Player with ID ${id} was successfully deleted.` };
  }
}
