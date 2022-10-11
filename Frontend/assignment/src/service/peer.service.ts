import { Injectable } from '@angular/core';


import {Peer} from 'peerjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  myPeerId=uuidv4();
  myPeer:any;



  constructor() { 
    this.myPeer=new Peer(this.myPeerId,{
      host:'localhost:3000', //hmm

      secure: false,
      port:3001,
      path:"/",
      debug:3


    });
    console.log(this.myPeer);
    
  }
}
