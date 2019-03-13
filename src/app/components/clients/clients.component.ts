import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../services/client.service';

import { Client } from './../../models/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed: number;
  headers: String[];

  constructor(private clientService: ClientService) {
    this.headers = [
      'Name',
      'Email',
      'Balance'
    ];
  }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(clients);
      this.getTotalOwed();
    });
  }

  getTotalOwed() {
    this.totalOwed = this.clients.reduce((total, client) => {
      return total + client.balance;
    }, 0);
  }

}
