package com.involveininnovation.chat.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString


@Document(collection = "messages")
public class Message {
    @Id
    private String id; // Unique identifier
    private String senderId;
    private String senderName;
    private String receiverName;
    private String receiverId;
    private String message;
    private Date date;
}
