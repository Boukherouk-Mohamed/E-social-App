package com.involveininnovation.chat.controller;

import com.involveininnovation.chat.messageRepository.MessageRepository;
import com.involveininnovation.chat.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.Date;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private MessageRepository messageRepository;

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message receiveMessage(@Payload Message message){
        // Save the message to MongoDB
        Message messageEntity = new Message();
        messageEntity.setId(message.getSenderName());
        messageEntity.setSenderName(message.getSenderName());
        messageEntity.setReceiverName(message.getReceiverName());
        messageEntity.setMessage(message.getMessage());
        messageEntity.setDate(new Date()); // Set the current date
        messageRepository.save(messageEntity);

        return message;
    }
    @MessageMapping("/private-message")
    public Message recMessage(@Payload Message message){

        Message messageEntity = new Message();
        messageEntity.setSenderName(message.getSenderName());
        messageEntity.setReceiverName(message.getReceiverName());
        messageEntity.setMessage(message.getMessage());
        messageEntity.setDate(new Date()); // Set the current date
        messageRepository.save(messageEntity);

        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private",message);
        System.out.println(message.toString());
        return message;
    }
}
