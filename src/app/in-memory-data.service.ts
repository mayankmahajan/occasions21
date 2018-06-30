import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const links = [
      { id: 'home', name: 'Home' },
      { id: 'aboutus', name: 'About Us' },
      { id: 'earnwithus', name: 'Earn With Us' },
      { id: 'inventory', name: 'Inventory' }
    ];

    // const categories = [
    //   { id: 1, name: 'Imitations'},
    //   { id: 2, name: 'Gold'},
    //   { id: 3, name: 'Diamonds'}
    // ]
    const categories = [
      { id: 1, name: 'CAT01'},
      { id: 2, name: 'CAT02'},
      { id: 3, name: 'CAT03'}
    ]
    return {links,categories};
  }
}