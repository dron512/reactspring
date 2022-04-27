package com.example.demo.controller;

import com.example.demo.entity.Member;
import com.example.demo.resentity.Message;
import com.example.demo.resentity.StatusEnum;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.Charset;


@RestController
public class UserController {

    @GetMapping(value = "/usr/{id}")
    @CrossOrigin(origins = "http://localhost:8080")
    public ResponseEntity<Message> findById(@PathVariable int id) {
        Member member = new Member();
        member.setId(1L);
        member.setUsername("aa@naver.com");
        member.setPassword("password");

        Message message = new Message();
        HttpHeaders headers= new HttpHeaders();
        headers.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));

        message.setStatus(StatusEnum.OK);
        message.setMessage("성공 코드");
        message.setData(member);

        return new ResponseEntity<>(message, headers, HttpStatus.OK);
    }


}
