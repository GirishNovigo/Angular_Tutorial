import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector:'[app-servers]', // used as attribute <div app-servers></div>
  // selector:'.app-servers', // used as class <div class="app-servers"></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationMsg = "No server was created!";
  serverMsg = "";
  userName = "";
  allowButton = false;
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  showSecret = false;
  log : any = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverMsg);
    return this.serverCreationMsg = "Server was created! Server Name is : " + this.serverMsg;
  }

  onUpdateServer(event : Event) {
    return this.serverMsg = (<HTMLInputElement>event.target).value;
  }

  onButtonClick() {
    if(this.userName == '')
      return this.allowButton = false;
    else
      return this.allowButton = true
  }

  userNameUpdate() {
    this.userName = '';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date)  
  }

}
