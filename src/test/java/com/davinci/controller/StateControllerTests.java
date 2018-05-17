package com.davinci.controller;

import com.davinci.model.State;
import com.davinci.service.StateService;
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
public class StateControllerTests {
    private MockMvc mockMvc;

    @Mock
    private StateService service;

    @InjectMocks
    private StateController controller;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

    @Test
    public void getAllSuccess() throws Exception {
        List<State> states = Arrays.asList(
                new State(ConstantsTests.State.NAME, null, new Date()),
                new State(ConstantsTests.State.NAME, null, new Date()));

        when(service.getAllState()).thenReturn(states);

        MvcResult result = mockMvc.perform(get("/state/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is(ConstantsTests.State.NAME)))
                .andExpect(jsonPath("$[1].name", is(ConstantsTests.State.NAME)))
                .andReturn();

        verify(service, times(1)).getAllState();
        verifyNoMoreInteractions(service);

        TypeToken<List<State>> token = new TypeToken<List<State>>() {
        };
        List<State> statesResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(statesResponse);
        assertEquals(states.size(), statesResponse.size());
    }

    @Test
    public void getByIdSuccess() throws Exception {
        State state = new State(ConstantsTests.State.NAME, null, new Date());

        when(service.getStateById(any(Integer.class))).thenReturn(state);

        MvcResult result = mockMvc.perform(get("/state/{id}", any(Integer.class)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("name", is(ConstantsTests.State.NAME)))
                .andReturn();

        verify(service, times(1)).getStateById(any(Integer.class));
        verifyNoMoreInteractions(service);

        State stateResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), State.class);
        assertNotNull(state);
        assertEquals(stateResponse.getName(), state.getName());
    }

    @Test
    public void createSuccess() throws Exception {
        State state = new State(ConstantsTests.State.NAME, null, new Date());

        when(service.createState(any(State.class))).thenReturn(state);

        MvcResult result = mockMvc.perform(
                post("/state/")
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content(ControllerTests.objectToJson(state)))
                .andExpect(status().isCreated())
                .andReturn();

        verify(service, times(1)).createState(any(State.class));
        verifyNoMoreInteractions(service);

        State stateResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), State.class);
        assertNotNull(stateResponse);
        assertEquals(state.getName(), stateResponse.getName());
    }

    @Test
    public void updateSuccess() throws Exception {
        State state = new State(ConstantsTests.State.NAME, null, new Date());
        state.setId(1);

        when(service.updateState(any(State.class), any(Integer.class))).thenReturn(state);

        MvcResult result = mockMvc.perform(put("/state/{id}", state.getId())
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ControllerTests.objectToJson(state)))
                .andExpect(status().isOk())
                .andReturn();

        verify(service, times(1)).updateState(any(State.class), any(Integer.class));
        verifyNoMoreInteractions(service);

        State stateResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), State.class);
        assertNotNull(stateResponse);
        assertEquals(state.getName(), stateResponse.getName());
    }

    @Test
    public void deleteSuccess() throws Exception {
        doNothing().when(service).deleteState(any(Integer.class));

        mockMvc.perform(
                delete("/state/{id}", any(Integer.class)))
                .andExpect(status().isOk());

        verify(service, times(1)).deleteState(any(Integer.class));
        verifyNoMoreInteractions(service);
    }
}
