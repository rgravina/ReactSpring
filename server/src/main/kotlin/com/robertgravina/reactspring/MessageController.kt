package com.robertgravina.reactspring

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class MessageController {
    @GetMapping("/message")
    fun responseHello(): Message {
        return Message("Hello, World")
    }
}