package com.example.demo.repository;

import com.example.demo.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {
    // select * from member where id =3;
    Member findById(long id);

    // select * from member where content like '%asdf%'

}
