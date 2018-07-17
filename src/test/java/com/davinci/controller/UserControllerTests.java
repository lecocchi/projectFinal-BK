package com.davinci.controller;

import com.davinci.model.User;
import com.davinci.service.UserService;
import com.davinci.support.ConstantsTests;
import com.davinci.support.ControllerTests;
import com.google.gson.reflect.TypeToken;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@SuppressWarnings("all")
public class UserControllerTests {
    private MockMvc mockMvc;

    @Mock
    private UserService service;

    @InjectMocks
    private UserController controller;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

//    @Test
//    public void getAllSuccess() throws Exception {
//        List<User> users = Arrays.asList(
//                new User(ConstantsTests.User.FIRST_NAME,
//                        ConstantsTests.User.LAST_NAME,
//                        ConstantsTests.User.DNI,
//                        ConstantsTests.User.EMAIL,
//                        ConstantsTests.User.USER_NAME,
//                        1,
//                        ConstantsTests.User.PASSWORD,
//                        new Date(),
//                        new Date(),
//                        Boolean.TRUE),
//                new User(ConstantsTests.User.FIRST_NAME,
//                        ConstantsTests.User.LAST_NAME,
//                        ConstantsTests.User.DNI,
//                        ConstantsTests.User.EMAIL,
//                        ConstantsTests.User.USER_NAME,
//                        1,
//                        ConstantsTests.User.PASSWORD,
//                        new Date(),
//                        new Date(),
//                        Boolean.TRUE));
//
//        when(service.getAllUser()).thenReturn(users);
//
//        MvcResult result = mockMvc.perform(get("/user/"))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
//                .andExpect(jsonPath("$", hasSize(2)))
//                .andExpect(jsonPath("$[0].firstName", is(ConstantsTests.User.FIRST_NAME)))
//                .andExpect(jsonPath("$[0].lastName", is(ConstantsTests.User.LAST_NAME)))
//                .andExpect(jsonPath("$[0].dni", is(ConstantsTests.User.DNI)))
//                .andExpect(jsonPath("$[0].email", is(ConstantsTests.User.EMAIL)))
//                .andExpect(jsonPath("$[0].userName", is(ConstantsTests.User.USER_NAME)))
//                .andExpect(jsonPath("$[0].password", is(ConstantsTests.User.PASSWORD)))
//                .andExpect(jsonPath("$[1].firstName", is(ConstantsTests.User.FIRST_NAME)))
//                .andExpect(jsonPath("$[1].lastName", is(ConstantsTests.User.LAST_NAME)))
//                .andExpect(jsonPath("$[1].dni", is(ConstantsTests.User.DNI)))
//                .andExpect(jsonPath("$[1].email", is(ConstantsTests.User.EMAIL)))
//                .andExpect(jsonPath("$[1].userName", is(ConstantsTests.User.USER_NAME)))
//                .andExpect(jsonPath("$[1].password", is(ConstantsTests.User.PASSWORD)))
//                .andReturn();
//
//        verify(service, times(1)).getAllUser();
//        verifyNoMoreInteractions(service);
//
//        TypeToken<List<User>> token = new TypeToken<List<User>>() {
//        };
//        List<User> usersResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);
//
//        assertNotNull(usersResponse);
//        assertEquals(users.size(), usersResponse.size());
//    }

//    @Test
//    public void getByIdSuccess() throws Exception {
//        User user = new User(ConstantsTests.User.FIRST_NAME,
//                ConstantsTests.User.LAST_NAME,
//                ConstantsTests.User.DNI,
//                ConstantsTests.User.EMAIL,
//                ConstantsTests.User.USER_NAME,
//                1,
//                ConstantsTests.User.PASSWORD,
//                new Date(),
//                new Date(),
//                Boolean.TRUE);
//
//        when(service.getUserById(any(Integer.class))).thenReturn(user);
//
//        MvcResult result = mockMvc.perform(get("/user/{id}", any(Integer.class)))
//                .andExpect(status().isOk())
//                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
//                .andExpect(jsonPath("firstName", is(ConstantsTests.User.FIRST_NAME)))
//                .andExpect(jsonPath("lastName", is(ConstantsTests.User.LAST_NAME)))
//                .andExpect(jsonPath("dni", is(ConstantsTests.User.DNI)))
//                .andExpect(jsonPath("email", is(ConstantsTests.User.EMAIL)))
//                .andExpect(jsonPath("userName", is(ConstantsTests.User.USER_NAME)))
//                .andExpect(jsonPath("password", is(ConstantsTests.User.PASSWORD)))
//                .andReturn();
//
//        verify(service, times(1)).getUserById(any(Integer.class));
//        verifyNoMoreInteractions(service);
//
//        User userResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), User.class);
//        assertNotNull(user);
//        assertEquals(userResponse.getUserName(), user.getUserName());
//    }
//
//    @Test
//    public void createSuccess() throws Exception {
//        User user = new User(ConstantsTests.User.FIRST_NAME,
//                ConstantsTests.User.LAST_NAME,
//                ConstantsTests.User.DNI,
//                ConstantsTests.User.EMAIL,
//                ConstantsTests.User.USER_NAME,
//                1,
//                ConstantsTests.User.PASSWORD,
//                new Date(),
//                new Date(),
//                Boolean.TRUE);
//
//        when(service.createUser(any(User.class))).thenReturn(user);
//
//        MvcResult result = mockMvc.perform(
//                post("/user/")
//                        .contentType(MediaType.APPLICATION_JSON_UTF8)
//                        .content(ControllerTests.objectToJson(user)))
//                .andExpect(status().isCreated())
//                .andReturn();
//
//        verify(service, times(1)).createUser(any(User.class));
//        verifyNoMoreInteractions(service);
//
//        User userResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), User.class);
//        assertNotNull(userResponse);
//        assertEquals(userResponse.getUserName(), user.getUserName());
//    }
//
//    @Test
//    public void updateSuccess() throws Exception {
//        User user = new User(ConstantsTests.User.FIRST_NAME,
//                ConstantsTests.User.LAST_NAME,
//                ConstantsTests.User.DNI,
//                ConstantsTests.User.EMAIL,
//                ConstantsTests.User.USER_NAME,
//                1,
//                ConstantsTests.User.PASSWORD,
//                new Date(),
//                new Date(),
//                Boolean.TRUE);
//        user.setId(1);
//
//        when(service.updateUser(any(User.class), any(Integer.class))).thenReturn(user);
//
//        MvcResult result = mockMvc.perform(put("/user/{id}", user.getId())
//                .contentType(MediaType.APPLICATION_JSON_UTF8)
//                .content(ControllerTests.objectToJson(user)))
//                .andExpect(status().isOk())
//                .andReturn();
//
//        verify(service, times(1)).updateUser(any(User.class), any(Integer.class));
//        verifyNoMoreInteractions(service);
//
//        User userResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), User.class);
//        assertNotNull(userResponse);
//        assertEquals(userResponse.getUserName(), user.getUserName());
//    }
//
//    @Test
//    public void deleteSuccess() throws Exception {
//        doNothing().when(service).deleteUser(any(Integer.class));
//
//        mockMvc.perform(
//                delete("/user/{id}", any(Integer.class)))
//                .andExpect(status().isOk());
//
//        verify(service, times(1)).deleteUser(any(Integer.class));
//        verifyNoMoreInteractions(service);
//    }
}
