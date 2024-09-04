package com.demo50.demo50.Controller;

import com.demo50.demo50.Repository.PostRepo;
import com.demo50.demo50.Repository.SearchRepo;
import com.demo50.demo50.models.Post;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    PostRepo repo;

    @Autowired
    SearchRepo searchRepo;


    @RequestMapping("/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts() {

        return repo.findAll();
    }


    @GetMapping("/posts/{text}")
    public List<Post> getFilteredPosts(@PathVariable("text") String text) {
        return searchRepo.findFilter(text);
    }

    @PostMapping("/addposts")
    public Post addPosts(@RequestBody Post p) {
       return   repo.save(p);
    }

}
