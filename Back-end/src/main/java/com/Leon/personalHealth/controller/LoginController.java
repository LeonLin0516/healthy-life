package com.Leon.personalHealth.controller;

import com.Leon.personalHealth.bean.User;
import com.Leon.personalHealth.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    UserDao userDao;

    @RequestMapping("/login")
    public String login(@RequestBody User user) {
        User u = userDao.getUserByMessage(user.getUsername(), user.getPassword());
        System.out.println("user:" + u);
        return "correct";
    }
}
