import { Component, EventEmitter, OnInit, Output , Input} from '@angular/core';
import { Server, ServerStatus } from 'src/app/models/server.model';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss']
})
export class ServerFormComponent implements OnInit {

  private readonly serverPortMin: number = 1000;
  private readonly serverPortMax: number = 99999;

  serverTemp: Server = new Server("", "", ServerStatus.Offline);

  @Input() disabled: boolean = false;

  @Output() serverAddEmitter: EventEmitter<Server> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.serverTemp.name === "") {
      this.serverTemp.name = "localhost";
    }

    if (this.serverTemp.port === "") {
      this.serverTemp.port = Math.floor(Math.random() * (this.serverPortMax - this.serverPortMin + 1)).toString();
    }

    this.serverAddEmitter.emit(this.serverTemp);
    this.serverTemp = new Server("", "", ServerStatus.Offline);
  }
}
