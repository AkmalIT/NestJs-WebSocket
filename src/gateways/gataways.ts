import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from "@nestjs/websockets";
import {OnModuleInit} from "@nestjs/common"


@WebSocketGateway()
export class GateWays implements OnModuleInit{

    @WebSocketServer()
    server

    onModuleInit() {
        this.server.on("connection", soket => {
            console.log(soket.id)
            console.log("Connected");
            
        })
    }

    @SubscribeMessage("newMessage")
    handleMessage(@MessageBody() body: any){
        this.server.emit("onMessage", {
            msg: "NewMessage",
            content: body
        })
    }
}