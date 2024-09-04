package com.demo50.demo50.Repository;

import com.demo50.demo50.models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<Post, String> {
}
