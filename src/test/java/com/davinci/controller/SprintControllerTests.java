package com.davinci.controller;

import com.davinci.model.Sprint;
import com.davinci.service.SprintService;
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
public class SprintControllerTests {
    private MockMvc mockMvc;

    @Mock
    private SprintService service;

    @InjectMocks
    private SprintController controller;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

    @Test
    public void getAllSuccess() throws Exception {
        List<Sprint> sprints = Arrays.asList(
                new Sprint(ConstantsTests.Sprint.NAME, new Date(), new Date(), new Date(), Boolean.TRUE),
                new Sprint(ConstantsTests.Sprint.NAME, new Date(), new Date(), new Date(), Boolean.TRUE));

        when(service.getAllSprint()).thenReturn(sprints);

        MvcResult result = mockMvc.perform(get("/sprint/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is(ConstantsTests.Sprint.NAME)))
                .andExpect(jsonPath("$[1].name", is(ConstantsTests.Sprint.NAME)))
                .andReturn();

        verify(service, times(1)).getAllSprint();
        verifyNoMoreInteractions(service);

        TypeToken<List<Sprint>> token = new TypeToken<List<Sprint>>() {
        };
        List<Sprint> sprintsResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(sprintsResponse);
        assertEquals(sprints.size(), sprintsResponse.size());
    }

    @Test
    public void getByIdSuccess() throws Exception {
        Sprint sprint = new Sprint(ConstantsTests.Sprint.NAME, new Date(), new Date(), new Date(), Boolean.TRUE);

        when(service.getSprintById(any(Integer.class))).thenReturn(sprint);

        MvcResult result = mockMvc.perform(get("/sprint/{id}", any(Integer.class)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("name", is(ConstantsTests.Sprint.NAME)))
                .andReturn();

        verify(service, times(1)).getSprintById(any(Integer.class));
        verifyNoMoreInteractions(service);

        Sprint sprintResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Sprint.class);
        assertNotNull(sprint);
        assertEquals(sprintResponse.getName(), sprint.getName());
    }

    @Test
    public void createSuccess() throws Exception {
        Sprint sprint = new Sprint(ConstantsTests.Sprint.NAME, new Date(), new Date(), new Date(), Boolean.TRUE);

        when(service.createSprint(any(Sprint.class))).thenReturn(sprint);

        MvcResult result = mockMvc.perform(
                post("/sprint/")
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content(ControllerTests.objectToJson(sprint)))
                .andExpect(status().isCreated())
                .andReturn();

        verify(service, times(1)).createSprint(any(Sprint.class));
        verifyNoMoreInteractions(service);

        Sprint sprintResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Sprint.class);
        assertNotNull(sprintResponse);
        assertEquals(sprint.getName(), sprintResponse.getName());
    }

    @Test
    public void updateSuccess() throws Exception {
        Sprint sprint = new Sprint(ConstantsTests.Sprint.NAME, new Date(), new Date(), new Date(), Boolean.TRUE);
        sprint.setId(1);

        when(service.updateSprint(any(Sprint.class), any(Integer.class))).thenReturn(sprint);

        MvcResult result = mockMvc.perform(put("/sprint/{id}", sprint.getId())
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ControllerTests.objectToJson(sprint)))
                .andExpect(status().isOk())
                .andReturn();

        verify(service, times(1)).updateSprint(any(Sprint.class), any(Integer.class));
        verifyNoMoreInteractions(service);

        Sprint sprintResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Sprint.class);
        assertNotNull(sprintResponse);
        assertEquals(sprint.getName(), sprintResponse.getName());
    }

    @Test
    public void deleteSuccess() throws Exception {
        doNothing().when(service).deleteSprint(any(Integer.class));

        mockMvc.perform(
                delete("/sprint/{id}", any(Integer.class)))
                .andExpect(status().isOk());

        verify(service, times(1)).deleteSprint(any(Integer.class));
        verifyNoMoreInteractions(service);
    }
}
