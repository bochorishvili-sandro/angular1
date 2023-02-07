export enum ServerStatus { Offline, Online };

export class Server {
  public name: string;
  public port: string;
  public status: ServerStatus;
  public lastUpdate: string = '';

  constructor(name: string, port: string, status: ServerStatus) {
    this.name = name;
    this.port = port;
    this.status = status;
    this.updateServerStatus();
  }

  updateServerStatus(){
    this.lastUpdate = new Date().toString().split("GMT")[0];
  }
}