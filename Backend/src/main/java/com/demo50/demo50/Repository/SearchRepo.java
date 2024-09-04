package com.demo50.demo50.Repository;

import com.demo50.demo50.models.Post;
import org.springframework.stereotype.Component;

import java.util.List;

public interface SearchRepo {

   List<Post> findFilter(String text);

}
