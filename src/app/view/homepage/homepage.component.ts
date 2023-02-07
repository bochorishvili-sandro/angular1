import { Component, OnInit } from '@angular/core';
import { Server } from 'src/app/models/server.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  servers: Server[] = [];
  filterValue: Server[] = [];
  showForm: boolean = true;

  private readonly serverPortMin: number = 1000;
  private readonly serverPortMax: number = 99999;

  constructor() { }

  ngOnInit(): void {
  }

  onServerItemAdded(server: Server) {
    this.servers.push(server);
    this.checkShowForm();
  }

  serversUpdated(servers: Server[]) {
    this.servers = servers;
    this.checkShowForm();
  }

  clearServers() {
    this.servers = [];
    this.checkShowForm();
  }

  toggleServers(option: number = 0) {
    this.servers.map((server) => {
      server.status = option;
    });
    this.checkShowForm();
  }

  checkShowForm() {
    this.showForm = this.servers.filter(server => server.status === 1).length < 10;
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  filterServers(option: number = 0) {
    this.filterValue = this.servers.filter(element => element.status === option);
  }

  clearFilter() {
    this.filterValue = [];
  }

  fillServers(count: number, status: number) {
    for (let i = 0; i < count; i++) {
      const serverTemp = new Server("", "", status);

      if (serverTemp.name === "") {
        serverTemp.name = "localhost";
      }

      if (serverTemp.port === "") {
        serverTemp.port = Math.floor(Math.random() * (this.serverPortMax - this.serverPortMin + 1)).toString();
      }

      this.servers.push(serverTemp);
    }
    this.checkShowForm();
  }

  removeServers(count: number) {
    this.servers.splice(0, count);
  }

  toggleEven(status: number) {
    this.servers.forEach((server, index) => {
      if (index % 2 !== 0) {
        server.status = status;
      }
    })
  }
}
