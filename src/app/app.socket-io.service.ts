import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class AppSocketIoService {

  private socket: SocketIOClient.Socket; // The client instance of socket.io
  // Constructor with an injection of ToastService
  constructor() {
    this.socket = io();
  }


}
