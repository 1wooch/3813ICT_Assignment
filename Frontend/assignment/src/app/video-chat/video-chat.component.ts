import { PeerService } from 'src/service/peer.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbActiveModal, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SocketService } from 'src/service/socket.service';
import {FormsModule} from '@angular/forms';
import { map } from 'rxjs';

interface VideoElement{
  muted:boolean;
  srcObject:MediaStream;
  userId:string;

}

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css']
})
export class VideoChatComponent implements OnInit {
  ownID:string;
  videos:VideoElement[]=[];


  constructor(private socketService:SocketService,private peerService:PeerService) {
    this.ownID=this.peerService.myPeerId;} 

  ngOnInit(){}
  




  //   this.socketService.peerID(this.peerService.myPeerId);
  //   navigator.mediaDevices.getUserMedia({
  //     audio:true,
  //     video:true,
  //   }).catch((err)=>{
  //     console.error('error occured: ',err);
  //     return null;
  //   }).then((stream:any)=>{
  //     if(stream){
  //       this.addMyVideo(stream);
  //       const call = this.peerService.myPeer.call(this.peerService.myPeerId,stream);
  //       call.on("stream",(remoteStream)=>{
  //         this.addMyVideo(remoteStream);
  //       });
  //     }
  //     this.peerService.myPeer.on('call',(call)=>{
  //       console.log('retrieve call...', call);
  //       call.answer(stream);
  //       call.on('stream',(otherUserVideoStream: MediaStream)=>{
  //         console.log('retreving other stream ',otherUserVideoStream);
  //         this.addOtherUserVideo(call.metadata.userId,otherUserVideoStream);

  //       });
  //       call.on('error',(err)=>{
  //         console.error(err);

  //       })
  //     });
  //     this.socketService.socket.on('peerID',(userId:any)=>{
  //       console.log('Receiving user connected event','Calling ${userId}');
  //       setTimeout(()=>{
  //         console.log('calling');
  //         const call=this.peerService.myPeer.call(userId,stream,{
  //           metadata:{userId:this.peerService.myPeerId},
  //         });
  //         console.log(call);
  //         call.on('stream',(otherUserVideoStream:MediaStream)=>{
  //           console.log('retriving other user stream after his connection');
  //           this.addOtherUserVideo(userId,otherUserVideoStream);
  //         });
  //         call.on('close',()=>{
  //           this.videos=this.videos.filter((video)=>video.userId!==userId);

  //         });

  //       },1000);
  //     });
  //   });
  // }
  // makeCall(){

  // }
  // addMyVideo(stream:MediaStream){
  //   this.videos.push({
  //     muted:true,
  //     srcObject:stream,
  //     userId:this.peerService.myPeerId
  //   });
  // }
  // addOtherUserVideo(userId:string,stream:MediaStream){
  //   const alreadyExisting=this.videos.some(video=>video.userId===userId);
  //   if(alreadyExisting){
  //     console.log(this.videos,userId);
  //     return;
  //   }
  //   this.videos.push({
  //     muted:false,
  //     srcObject:stream,
  //     userId:userId
  //   });
  // }
  // onLoadedMetadata(event:Event){
  //   (event.target as HTMLVideoElement).play();
  // }



  // async streamScreen(){
  //   let stream=await navigator.mediaDevices.getDisplayMedia(gdmOptions);
  //   await this.addMyVideo(stream);
  //   if(this.peerService.myPeer.disconnected){
  //     await this.peerService.myPeer.reconnect();
  //   }
  //   this.socketService.peerID(this.peerService.myPeerId);
  //   this.answering(stream);
  //   this.calling(this.peerService.myPeerId,stream);
  //   this.isCallStarted=true;
  // }



  // async streamCamera(){
  //   let stream=await navigator.mediaDevices.getUserMedia(gumOptions);
  //   await this.addMyVideo(stream);
  //   if(this.peerService.myPeer.disconnected){
  //     await this.peerService.myPeer.reconnect();
  //   }
  //   await this.socketService.peerID(this.peerService.myPeerId);
  //   this.answering(stream);
  //   this.calling(this.peerService.myPeerId,stream);
  //   this.isCallStarted=true;  
  // }
  // async endCall(){
  //   await this.peerService.myPeer.disconnect();
  //   this.videos=[];
  //   this.isCallStarted=false;
  // }
  // answering(stream){
  //   this.peerService.myPeer.on('call',(call)=>{
  //     console.log('receiving call...',call);
  //     call.answer(stream);

  //     call.on('stream',(otherUserVideoStream:MediaStream)=>{
  //       console.log('receiving other steram',otherUserVideoStream);
  //       this.addOtherUserVideo(call.metadata.peerId,otherUserVideoStream);

  //     });
  //     call.on('close',()=>{
  //       this.videos=this.videos.filter((video)=>video.userId !==call.metadata.peerId);
  //     });
  //     call.on('error',(err)>{
  //       console.error(err);

  //     })
  //   });
  // }
  // calling(userID,stream){
  //   this.socketService.getPeerID().subscribe((peerID:any)=>{
  //     console.log('if a peer being ready to be called','calling ${peerID}');
  //     const call = this.peerService.myPeer.call(peerID,stream,{
  //       metadata:{peerId:userID},
  //     });
  //     console.log(call);
  //     call.on('stream',(otherUserVideoStream:MediaStream)=>{
  //       console.log('receiving other user stream after his connection');
  //       this.addOtherUserVideo(peerID,otherUserVideoStream);
  //     });
  //     call.on('close',()=>{
  //       this.videos=this.videos.filter((video)=>video.userId !==peerID);

  //     });
  //   });
  // }
}
