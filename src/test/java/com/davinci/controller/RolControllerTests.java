package com.davinci.controller;

import com.davinci.model.Rol;
import com.davinci.service.RolService;
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
public class RolControllerTests {

    private MockMvc mockMvc;

    @Mock
    private RolService service;

    @InjectMocks
    private RolController controller;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

    @Test
    public void getAllSuccess() throws Exception {
        List<Rol> rols = Arrays.asList(
                new Rol(ConstantsTests.Rol.NAME, new Date()),
                new Rol(ConstantsTests.Rol.NAME, new Date()));

        when(service.getAllRol()).thenReturn(rols);

        MvcResult result = mockMvc.perform(get("/rol/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is(ConstantsTests.Rol.NAME)))
                .andExpect(jsonPath("$[1].name", is(ConstantsTests.Rol.NAME)))
                .andReturn();

        verify(service, times(1)).getAllRol();
        verifyNoMoreInteractions(service);

        TypeToken<List<Rol>> token = new TypeToken<List<Rol>>() {
        };
        List<Rol> rolsResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(rolsResponse);
        assertEquals(rols.size(), rolsResponse.size());
    }

    @Test
    public void getByIdSuccess() throws Exception {
        Rol rol = new Rol(ConstantsTests.Rol.NAME, new Date());

        when(service.getRolById(any(Integer.class))).thenReturn(rol);

        MvcResult result = mockMvc.perform(get("/rol/{id}", any(Integer.class)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("name", is(ConstantsTests.Rol.NAME)))
                .andReturn();

        verify(service, times(1)).getRolById(any(Integer.class));
        verifyNoMoreInteractions(service);

        Rol rolResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Rol.class);
        assertNotNull(rol);
        assertEquals(rolResponse.getName(), rol.getName());
    }

    @Test
    public void createSuccess() throws Exception {
        Rol rol = new Rol(ConstantsTests.Rol.NAME, new Date());

        when(service.createRol(any(Rol.class))).thenReturn(rol);

        MvcResult result = mockMvc.perform(
                post("/rol/")
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content(ControllerTests.objectToJson(rol)))
                .andExpect(status().isCreated())
                .andReturn();

        verify(service, times(1)).createRol(any(Rol.class));
        verifyNoMoreInteractions(service);

        Rol rolResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Rol.class);
        assertNotNull(rolResponse);
        assertEquals(rol.getName(), rolResponse.getName());
    }

    @Test
    public void updateSuccess() throws Exception {
        Rol rol = new Rol(ConstantsTests.Rol.NAME, new Date());
        rol.setId(1);

        when(service.updateRol(any(Rol.class), any(Integer.class))).thenReturn(rol);

        MvcResult result = mockMvc.perform(put("/rol/{id}", rol.getId())
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ControllerTests.objectToJson(rol)))
                .andExpect(status().isOk())
                .andReturn();

        verify(service, times(1)).updateRol(any(Rol.class), any(Integer.class));
        verifyNoMoreInteractions(service);

        Rol rolResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Rol.class);
        assertNotNull(rolResponse);
        assertEquals(rol.getName(), rolResponse.getName());
    }

    @Test
    public void deleteSuccess() throws Exception {
        doNothing().when(service).deleteRol(any(Integer.class));

        mockMvc.perform(
                delete("/rol/{id}", any(Integer.class)))
                .andExpect(status().isOk());

        verify(service, times(1)).deleteRol(any(Integer.class));
        verifyNoMoreInteractions(service);
    }
}
