package com.davinci.controller;

import com.davinci.model.Priority;
import com.davinci.service.PriorityService;
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
public class PriorityControllerTests {
    private MockMvc mockMvc;

    @Mock
    private PriorityService service;

    @InjectMocks
    private PriorityController controller;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

    @Test
    public void getAllSuccess() throws Exception {
        List<Priority> priorities = Arrays.asList(
                new Priority(ConstantsTests.Priority.NAME, null, new Date()),
                new Priority(ConstantsTests.Priority.NAME, null, new Date()));

        when(service.getAllPriority()).thenReturn(priorities);

        MvcResult result = mockMvc.perform(get("/priority/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is(ConstantsTests.Priority.NAME)))
                .andExpect(jsonPath("$[1].name", is(ConstantsTests.Priority.NAME)))
                .andReturn();

        verify(service, times(1)).getAllPriority();
        verifyNoMoreInteractions(service);

        TypeToken<List<Priority>> token = new TypeToken<List<Priority>>() {
        };
        List<Priority> prioritiesResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(prioritiesResponse);
        assertEquals(priorities.size(), prioritiesResponse.size());
    }

    @Test
    public void getByIdSuccess() throws Exception {
        Priority priority = new Priority(ConstantsTests.Priority.NAME, null, new Date());

        when(service.getPriorityById(any(Integer.class))).thenReturn(priority);

        MvcResult result = mockMvc.perform(get("/priority/{id}", any(Integer.class)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("name", is(ConstantsTests.Priority.NAME)))
                .andReturn();

        verify(service, times(1)).getPriorityById(any(Integer.class));
        verifyNoMoreInteractions(service);

        Priority priorityResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Priority.class);
        assertNotNull(priority);
        assertEquals(priorityResponse.getName(), priority.getName());
    }

    @Test
    public void createSuccess() throws Exception {
        Priority priority = new Priority(ConstantsTests.Priority.NAME, null, new Date());

        when(service.createPriority(any(Priority.class))).thenReturn(priority);

        MvcResult result = mockMvc.perform(
                post("/priority/")
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content(ControllerTests.objectToJson(priority)))
                .andExpect(status().isCreated())
                .andReturn();

        verify(service, times(1)).createPriority(any(Priority.class));
        verifyNoMoreInteractions(service);

        Priority priorityResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Priority.class);
        assertNotNull(priorityResponse);
        assertEquals(priority.getName(), priorityResponse.getName());
    }

    @Test
    public void updateSuccess() throws Exception {
        Priority priority = new Priority(ConstantsTests.Priority.NAME, null, new Date());
        priority.setId(1);

        when(service.updatePriority(any(Priority.class), any(Integer.class))).thenReturn(priority);

        MvcResult result = mockMvc.perform(put("/priority/{id}", priority.getId())
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ControllerTests.objectToJson(priority)))
                .andExpect(status().isOk())
                .andReturn();

        verify(service, times(1)).updatePriority(any(Priority.class), any(Integer.class));
        verifyNoMoreInteractions(service);

        Priority priorityResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Priority.class);
        assertNotNull(priorityResponse);
        assertEquals(priority.getName(), priorityResponse.getName());
    }

    @Test
    public void deleteSuccess() throws Exception {
        doNothing().when(service).deletePriority(any(Integer.class));

        mockMvc.perform(
                delete("/priority/{id}", any(Integer.class)))
                .andExpect(status().isOk());

        verify(service, times(1)).deletePriority(any(Integer.class));
        verifyNoMoreInteractions(service);
    }
}
