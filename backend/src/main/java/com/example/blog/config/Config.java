package com.example.blog.config;

import java.time.Instant;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.example.blog.model.entities.Post;
import com.example.blog.model.repositories.PostRepository;

@Configuration
public class Config implements CommandLineRunner {

    private final PostRepository postRepository;

    public Config(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Post p1 = new Post(null, "Valores imutaveis e mutaveis, afinal o que isso implica?",
                "lorem ipsulum dolor lorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolor",
                Instant.now(), Instant.now());

        Post p2 = new Post(null, "Primeiros passos no sql",
                "lorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolor",
                Instant.now(), Instant.now());

        postRepository.saveAll(Arrays.asList(p1, p2));

        postRepository.findPageElementsById(1);

    }

}
