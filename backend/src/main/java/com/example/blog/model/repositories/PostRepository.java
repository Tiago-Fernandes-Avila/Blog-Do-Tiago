package com.example.blog.model.repositories;

import java.time.Instant;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.blog.model.dtos.NumberPosts;
import com.example.blog.model.dtos.PostDto;
import com.example.blog.model.dtos.PostPageDto;
import com.example.blog.model.dtos.PostsFromUserDto;
import com.example.blog.model.entities.Paragraphs;
import com.example.blog.model.entities.Post;
import com.example.blog.model.entities.SubTitles;

@Repository
public class PostRepository {
    private final JdbcClient jdbcClient;

    public PostRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }
    //2 params quantidade por pagina, e a pagina é igual ((? - 1) * quantidade)


    //Integer id, String title, String intro, String postImagePath, Instant createdAt, Instant updatedAt, Integer ownerUserId, String userName, String profilePicturePath

    private final String findAll_statment_sql = """
     SELECT p.id,
       p.title,
       p.intro,
       p.post_image_path   AS postImagePath,
       p.created_at        AS createdAt,
       p.updated_at        AS updatedAt,
       u.id                AS ownerUserId,
       u.user_name         AS userName,
       u.profile_image_path AS profilePicturePath
        FROM tb_posts p
    LEFT JOIN tb_users u ON u.id = p.users_id
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
""";
    
    
    
    private final String findById_statment_sql = "SELECT * FROM tb_posts WHERE id = ?";
    private final String findByTitle_statment_sql = "SELECT * FROM tb_posts WHERE title LIKE ?";
    private final String save_statment_sql = "INSERT INTO tb_posts(id,title, intro, post_image_path, users_id) VALUES (?, ?, ?, ?, ?)";
    private final String update_statment_sql = "UPDATE tb_posts SET title = ?, content = ? WHERE id = ?";
    private final String delete_statment_sql = "DELETE FROM tb_posts WHERE id = ?";
    private final String getNumberPages_sql = "SELECT COUNT(id) AS quantityPosts FROM TB_POSTS";


    private final String find_post_subtitles_and_paragraphs = """
                        SELECT
                p.id         AS post_id,
                p.title      AS post_title,
                p.intro     AS intro,

                st.id        AS sub_id,
                st.title     AS sub_title,
                st.display_order AS display_order,

                para.id      AS para_id,
                para.para_content AS para_content,
                para.display_order AS para_order

            FROM tb_posts p
            LEFT JOIN tb_sub_titles st ON st.post_id = p.id
            LEFT JOIN tb_paragraphs para ON para.sub_title_id = st.id
            WHERE p.id = ?
            ORDER BY display_order, para_order
                        """;

    private final String find_posts_by_username = """
                        SELECT
                u.user_name,
                p.id AS post_id,
                p.title,
                p.intro,
                p.post_image_path,
                p.created_at
            FROM tb_users u
            JOIN tb_posts p ON p.users_id = u.id
            WHERE u.user_name = ?;
                        """;

    @Transactional
    public void save(Post post) {
        jdbcClient.sql(save_statment_sql)
                .param(post.getId())
                .param(post.getTitle())
                .param(post.getIntro())
                .param(post.getPostImagePath())
                .param(post.getOwnerUserId())
                .update();
    }

    @Transactional
    public void saveAll(List<Post> post) {
        for (Post p : post) {
            save(p);
        }
    }

    @Transactional
    public void update(Post post) {
        jdbcClient.sql(update_statment_sql).param(post.getId()).param(post.getTitle()).param(post.getIntro())
                .update();
    }

    @Transactional
    public void delete(Integer id) {
        jdbcClient.sql(delete_statment_sql).param(id).update();
    }

    @Transactional
    public List<PostDto> findAll(Integer limit, Integer page) {

        return jdbcClient.sql(findAll_statment_sql)
        .param(limit)
        .param(((page - 1) * limit))
        .query(PostDto.class).list();
    }

    @Transactional
    public Optional<Post> findById(Integer id) {
        return jdbcClient.sql(findById_statment_sql).param(id).query(Post.class).optional();
    }

    @Transactional
    public List<Post> findByTitle(String title) { // i will use it for dinamic search in future for UX
        return jdbcClient.sql(findByTitle_statment_sql).param(title).query(Post.class).list();
    }

   

    @Transactional
    public List<PostsFromUserDto> findPostFromUserName(String username) {
        return jdbcClient.sql(find_posts_by_username).param(username).query(PostsFromUserDto.class).list();

    }
    @Transactional
    public Integer getNumberPosts(){
        Integer numberPosts = 0;
        numberPosts = jdbcClient.sql(getNumberPages_sql).query(NumberPosts.class).optional().get().quantityPosts();
            return numberPosts;
    }



    @Transactional
    public Post findPageElementsById(Integer postId) {
        List<PostPageDto> rows = jdbcClient.sql(find_post_subtitles_and_paragraphs)
                .param(postId)
                .query((rs, rowNum) -> new PostPageDto(
                        rs.getInt("post_id"),
                        rs.getString("post_title"),
                        rs.getString("intro"),
                        rs.getInt("sub_id"),
                        rs.getString("sub_title"),
                        rs.getInt("display_order"),
                        rs.getInt("para_id"),
                        rs.getString("para_content"),
                        rs.getInt("para_order")))
                .list(); // tenho um objeto que armazena o conglomerado da query preciso separar todas
                         // esses tuplas em objetos post dentro dos posts devo armazenar os sub titutlos
                         // na lista e nos sub titulos seus paragrafos em lista

        Map<Integer, Post> postMap = new LinkedHashMap<>();
        Map<Integer, SubTitles> subTitleMap = new LinkedHashMap<>();

        for (PostPageDto row : rows) {
            Post post = postMap.computeIfAbsent(postId, (id) -> { // salve o post do determinado id_post se ele não
                                                                  // existe
                Post p = new Post();
                p.setId(row.postId());
                p.setTitle(row.postTitle());
                p.setIntro(row.content());
                p.setSubTitles(new ArrayList<>());
                return p;
            });

            if (row.subId() == null) {
                continue;
            }

            subTitleMap.computeIfAbsent(row.subId(), (id) -> {
                SubTitles s = new SubTitles(row.subId(), row.title(), row.displayOrder(), new ArrayList<>(),
                        row.postId());
                postMap.get(postId).getSubTitles().add(s);
                return s;
            });

            if (row.paraId() == null) {
                continue;
            }

            Paragraphs p = new Paragraphs(row.paraId(), row.paraContent(), row.paraOrder(), row.subId());

            subTitleMap.get(row.subId()).getParagraphs().add(p);

        }

        return postMap.get(postId);

    }




}


