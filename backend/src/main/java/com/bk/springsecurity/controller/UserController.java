package com.bk.springsecurity.controller;


import com.bk.springsecurity.Dto.LoginDTO;
import com.bk.springsecurity.Dto.UserDTO;
import com.bk.springsecurity.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/user")
public class UserController {


    @Autowired
    private UserService userService;


    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody UserDTO userDTO)
    {
        String id = userService.addEmployee(userDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public String login(@RequestBody LoginDTO loginDTO) {
        boolean isAuthenticated = userService.authenticateUser(loginDTO.getEmail(), loginDTO.getPassword());

        if (isAuthenticated) {
            return "Login successful!";
        } else {
            return "Invalid credentials. Login failed.";
        }
    }



}
