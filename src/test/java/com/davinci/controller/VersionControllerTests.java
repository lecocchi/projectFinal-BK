package com.davinci.controller;

import com.davinci.model.Version;
import com.davinci.service.VersionService;
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
public class VersionControllerTests {
    private MockMvc mockMvc;

    @Mock
    private VersionService service;

    @InjectMocks
    private VersionController controller;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

    @Test
    public void getAllSuccess() throws Exception {
        List<Version> versions = Arrays.asList(
                new Version(ConstantsTests.Version.NAME, null, new Date()),
                new Version(ConstantsTests.Version.NAME, null, new Date()));

        when(service.getAllVersion()).thenReturn(versions);

        MvcResult result = mockMvc.perform(get("/version/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is(ConstantsTests.Version.NAME)))
                .andExpect(jsonPath("$[1].name", is(ConstantsTests.Version.NAME)))
                .andReturn();

        verify(service, times(1)).getAllVersion();
        verifyNoMoreInteractions(service);

        TypeToken<List<Version>> token = new TypeToken<List<Version>>() {
        };
        List<Version> versionsResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(versionsResponse);
        assertEquals(versions.size(), versionsResponse.size());
    }

    @Test
    public void getByIdSuccess() throws Exception {
        Version version = new Version(ConstantsTests.Version.NAME, null, new Date());

        when(service.getVersionById(any(Integer.class))).thenReturn(version);

        MvcResult result = mockMvc.perform(get("/version/{id}", any(Integer.class)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("name", is(ConstantsTests.Version.NAME)))
                .andReturn();

        verify(service, times(1)).getVersionById(any(Integer.class));
        verifyNoMoreInteractions(service);

        Version versionResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Version.class);
        assertNotNull(version);
        assertEquals(versionResponse.getName(), version.getName());
    }

    @Test
    public void createSuccess() throws Exception {
        Version version = new Version(ConstantsTests.Version.NAME, null, new Date());

        when(service.createVersion(any(Version.class))).thenReturn(version);

        MvcResult result = mockMvc.perform(
                post("/version/")
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content(ControllerTests.objectToJson(version)))
                .andExpect(status().isCreated())
                .andReturn();

        verify(service, times(1)).createVersion(any(Version.class));
        verifyNoMoreInteractions(service);

        Version versionResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Version.class);
        assertNotNull(versionResponse);
        assertEquals(version.getName(), versionResponse.getName());
    }

    @Test
    public void updateSuccess() throws Exception {
        Version version = new Version(ConstantsTests.Version.NAME, null, new Date());
        version.setId(1);

        when(service.updateVersion(any(Version.class), any(Integer.class))).thenReturn(version);

        MvcResult result = mockMvc.perform(put("/version/{id}", version.getId())
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ControllerTests.objectToJson(version)))
                .andExpect(status().isOk())
                .andReturn();

        verify(service, times(1)).updateVersion(any(Version.class), any(Integer.class));
        verifyNoMoreInteractions(service);

        Version versionResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Version.class);
        assertNotNull(versionResponse);
        assertEquals(version.getName(), versionResponse.getName());
    }

    @Test
    public void deleteSuccess() throws Exception {
        doNothing().when(service).deleteVersion(any(Integer.class));

        mockMvc.perform(
                delete("/version/{id}", any(Integer.class)))
                .andExpect(status().isOk());

        verify(service, times(1)).deleteVersion(any(Integer.class));
        verifyNoMoreInteractions(service);
    }
}
