import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Server } from 'src/app/models/server.model';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss']
})
export class ServerTableComponent implements OnInit {
  @Input() servers: Server[] = [];
  @Input() filteredServers: Server[] = [];
  @Output() serversUpdatedEmit: EventEmitter<Server[]> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  serverStatusUpdated(server: Server){
    server.status = server.status === 0 ? 1 : 0;
    server.updateServerStatus();
    this.serversUpdatedEmit.emit(this.servers);
  }

}
