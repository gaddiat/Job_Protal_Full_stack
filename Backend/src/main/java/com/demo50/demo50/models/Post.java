package com.demo50.demo50.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document(collection ="jobPosts")
@Data
@NoArgsConstructor
public class Post {
    private String profile;
    private String desc;
    private int exp;
    private String[] techs;

}
