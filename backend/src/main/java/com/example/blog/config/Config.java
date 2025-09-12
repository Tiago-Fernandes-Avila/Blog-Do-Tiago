package com.example.blog.config;

import java.time.Instant;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import com.example.blog.model.entities.Post;
import com.example.blog.model.entities.Users;
import com.example.blog.model.repositories.PostRepository;
import com.example.blog.model.repositories.UsersRepository;

@Configuration
public class Config implements CommandLineRunner {

    private final PostRepository postRepository;
    private final UsersRepository usersRepository;

    public Config(PostRepository postRepository, UsersRepository usersRepository) {
        this.postRepository = postRepository;
        this.usersRepository = usersRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        usersRepository.save(new Users("Tiago24062003", "password", "My name is tiago and im a programmer", "tiago@hotmail.com", "https://lh3.googleusercontent.com/a/ACg8ocJgDRB8bj09yJMCOd6yZzGvtbvPQbDFGSjlmgnyid0vWqgRML4-=s231-c-no", null));





        Post p1 = new Post(null, "Valores imutaveis e mutaveis, afinal o que isso implica?", "lorem lorem lorem lorem", "https://media.istockphoto.com/id/1439425791/pt/foto/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.jpg?s=612x612&w=0&k=20&c=O0hf86Zl6sxV-uV-GmoyRiz_tfe_7LQ6V0XKz-hrxOA=", 1, null, Instant.now(), Instant.now());


        Post p2 = new Post(
    null, "Como normalizar dados em left join no jdbc:","lorem lorem lorem lorem lorem lorem","https://media.istockphoto.com/id/1439425791/pt/foto/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.jpg?s=612x612&w=0&k=20&c=O0hf86Zl6sxV-uV-GmoyRiz_tfe_7LQ6V0XKz-hrxOA=", 1, null, Instant.now(), Instant.now()
);

        Post p3 = new Post(null, "Primeiros passos no sql",
                "lorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlordem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolorlorem ipsulum dolor", "https://media.istockphoto.com/id/1439425791/pt/foto/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.jpg?s=612x612&w=0&k=20&c=O0hf86Zl6sxV-uV-GmoyRiz_tfe_7LQ6V0XKz-hrxOA=", 1,null,
                Instant.now(), Instant.now());

        postRepository.saveAll(Arrays.asList(p1, p2, p3));

        

    }

}
