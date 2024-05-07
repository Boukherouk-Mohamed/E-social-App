package com.involveininnovation.chat.messageRepository;

import com.involveininnovation.chat.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends MongoRepository<Message, String> {
    // Define additional methods if needed
}
