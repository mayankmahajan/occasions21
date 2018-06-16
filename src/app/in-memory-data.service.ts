import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const links = [
      { id: 1, name: 'Home' },
      { id: 2, name: 'About Us' },
      { id: 3, name: 'Inventory' },
      { id: 4, name: 'Earn With Us' }
    ];

    return {links};
  }
}