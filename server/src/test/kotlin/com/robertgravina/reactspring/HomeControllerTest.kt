package com.robertgravina.reactspring

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class HomeControllerTest {
    @Test
    fun test_rendersIndex() {
        val controller = HomeController()

        val response = controller.index()

        assertThat(response).isEqualTo("index");
    }
}