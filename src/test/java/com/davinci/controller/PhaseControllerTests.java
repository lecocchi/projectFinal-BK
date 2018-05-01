package com.davinci.controller;

import com.davinci.model.Phase;
import com.davinci.service.PhaseService;
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
public class PhaseControllerTests {
    private MockMvc mockMvc;

    @Mock
    private PhaseService service;

    @InjectMocks
    private PhaseController controller;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

    @Test
    public void getAllSuccess() throws Exception {
        List<Phase> phases = Arrays.asList(
                new Phase(ConstantsTests.Phase.NAME, new Date()),
                new Phase(ConstantsTests.Phase.NAME, new Date()));

        when(service.getAllPhase()).thenReturn(phases);

        MvcResult result = mockMvc.perform(get("/phase/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is(ConstantsTests.Phase.NAME)))
                .andExpect(jsonPath("$[1].name", is(ConstantsTests.Phase.NAME)))
                .andReturn();

        verify(service, times(1)).getAllPhase();
        verifyNoMoreInteractions(service);

        TypeToken<List<Phase>> token = new TypeToken<List<Phase>>() {
        };
        List<Phase> phasesResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(phasesResponse);
        assertEquals(phases.size(), phasesResponse.size());
    }

    @Test
    public void getByIdSuccess() throws Exception {
        Phase phase = new Phase(ConstantsTests.Phase.NAME, new Date());

        when(service.getPhaseById(any(Integer.class))).thenReturn(phase);

        MvcResult result = mockMvc.perform(get("/phase/{id}", any(Integer.class)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("name", is(ConstantsTests.Phase.NAME)))
                .andReturn();

        verify(service, times(1)).getPhaseById(any(Integer.class));
        verifyNoMoreInteractions(service);

        Phase phaseResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Phase.class);
        assertNotNull(phase);
        assertEquals(phaseResponse.getName(), phase.getName());
    }

    @Test
    public void createSuccess() throws Exception {
        Phase phase = new Phase(ConstantsTests.Phase.NAME, new Date());

        when(service.createPhase(any(Phase.class))).thenReturn(phase);

        MvcResult result = mockMvc.perform(
                post("/phase/")
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content(ControllerTests.objectToJson(phase)))
                .andExpect(status().isCreated())
                .andReturn();

        verify(service, times(1)).createPhase(any(Phase.class));
        verifyNoMoreInteractions(service);

        Phase phaseResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Phase.class);
        assertNotNull(phaseResponse);
        assertEquals(phase.getName(), phaseResponse.getName());
    }

    @Test
    public void updateSuccess() throws Exception {
        Phase phase = new Phase(ConstantsTests.Phase.NAME, new Date());
        phase.setId(1);

        when(service.updatePhase(any(Phase.class), any(Integer.class))).thenReturn(phase);

        MvcResult result = mockMvc.perform(put("/phase/{id}", phase.getId())
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ControllerTests.objectToJson(phase)))
                .andExpect(status().isOk())
                .andReturn();

        verify(service, times(1)).updatePhase(any(Phase.class), any(Integer.class));
        verifyNoMoreInteractions(service);

        Phase phaseResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Phase.class);
        assertNotNull(phaseResponse);
        assertEquals(phase.getName(), phaseResponse.getName());
    }

    @Test
    public void deleteSuccess() throws Exception {
        doNothing().when(service).deletePhase(any(Integer.class));

        mockMvc.perform(
                delete("/phase/{id}", any(Integer.class)))
                .andExpect(status().isOk());

        verify(service, times(1)).deletePhase(any(Integer.class));
        verifyNoMoreInteractions(service);
    }
}
