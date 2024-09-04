package com.demo50.demo50.Repository;

import com.demo50.demo50.models.Post;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class SearchRepoImp implements SearchRepo {

    @Autowired
    MongoClient mclient;

    @Autowired
    MongoConverter converter;

    @Override
    public List<Post> findFilter(String text) {

        final List<Post> posts = new ArrayList<>();

        MongoDatabase database = mclient.getDatabase("jobInfo");
        MongoCollection<Document> collection = database.getCollection("jobPosts");

        AggregateIterable<Document> result = collection.aggregate(List.of(new Document("$search",
                new Document("index", "default")
                        .append("text",
                                new Document("query", text)
                                        .append("path", Arrays.asList("desc", "techs", "profile"))))));

        result.forEach(document -> posts.add(converter.read(Post.class,document)));
        return posts;
    }
}
