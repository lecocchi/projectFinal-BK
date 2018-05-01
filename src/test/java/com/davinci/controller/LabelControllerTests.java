package com.davinci.controller;

import com.davinci.model.Label;
import com.davinci.service.LabelService;
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
public class LabelControllerTests {
    private MockMvc mockMvc;

    @Mock
    private LabelService service;

    @InjectMocks
    private LabelController controller;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

    @Test
    public void getAllSuccess() throws Exception {
        List<Label> labels = Arrays.asList(
                new Label(ConstantsTests.Label.NAME, new Date()),
                new Label(ConstantsTests.Label.NAME, new Date()));

        when(service.getAllLabel()).thenReturn(labels);

        MvcResult result = mockMvc.perform(get("/label/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is(ConstantsTests.Label.NAME)))
                .andExpect(jsonPath("$[1].name", is(ConstantsTests.Label.NAME)))
                .andReturn();

        verify(service, times(1)).getAllLabel();
        verifyNoMoreInteractions(service);

        TypeToken<List<Label>> token = new TypeToken<List<Label>>() {
        };
        List<Label> labelsResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(labelsResponse);
        assertEquals(labels.size(), labelsResponse.size());
    }

    @Test
    public void getByIdSuccess() throws Exception {
        Label label = new Label(ConstantsTests.Label.NAME, new Date());

        when(service.getLabelById(any(Integer.class))).thenReturn(label);

        MvcResult result = mockMvc.perform(get("/label/{id}", any(Integer.class)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("name", is(ConstantsTests.Label.NAME)))
                .andReturn();

        verify(service, times(1)).getLabelById(any(Integer.class));
        verifyNoMoreInteractions(service);

        Label labelResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Label.class);
        assertNotNull(label);
        assertEquals(labelResponse.getName(), label.getName());
    }

    @Test
    public void createSuccess() throws Exception {
        Label label = new Label(ConstantsTests.Label.NAME, new Date());

        when(service.createLabel(any(Label.class))).thenReturn(label);

        MvcResult result = mockMvc.perform(
                post("/label/")
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content(ControllerTests.objectToJson(label)))
                .andExpect(status().isCreated())
                .andReturn();

        verify(service, times(1)).createLabel(any(Label.class));
        verifyNoMoreInteractions(service);

        Label labelResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Label.class);
        assertNotNull(labelResponse);
        assertEquals(label.getName(), labelResponse.getName());
    }

    @Test
    public void updateSuccess() throws Exception {
        Label label = new Label(ConstantsTests.Label.NAME, new Date());
        label.setId(1);

        when(service.updateLabel(any(Label.class), any(Integer.class))).thenReturn(label);

        MvcResult result = mockMvc.perform(put("/label/{id}", label.getId())
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ControllerTests.objectToJson(label)))
                .andExpect(status().isOk())
                .andReturn();

        verify(service, times(1)).updateLabel(any(Label.class), any(Integer.class));
        verifyNoMoreInteractions(service);

        Label labelResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Label.class);
        assertNotNull(labelResponse);
        assertEquals(label.getName(), labelResponse.getName());
    }

    @Test
    public void deleteSuccess() throws Exception {
        doNothing().when(service).deleteLabel(any(Integer.class));

        mockMvc.perform(
                delete("/label/{id}", any(Integer.class)))
                .andExpect(status().isOk());

        verify(service, times(1)).deleteLabel(any(Integer.class));
        verifyNoMoreInteractions(service);
    }
}
