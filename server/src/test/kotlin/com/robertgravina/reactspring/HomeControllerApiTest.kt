package com.robertgravina.reactspring

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.client.getForObject
import java.util.*

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class HomeControllerApiTest {
    @Autowired
    private lateinit var restTemplate: TestRestTemplate

    @BeforeEach
    @Throws(Exception::class)
    fun setUp() {
        TimeZone.setDefault(TimeZone.getTimeZone("UTC"))
    }

    @Test
    fun rendersReactApp() {
        val response = restTemplate.getForObject<String>("/")

        assertThat(response).contains("<div id=\"app\"></div>")
    }
}