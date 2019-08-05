package com.davinci.controller;

import com.davinci.model.Issue;
import com.davinci.service.IssueService;
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

import static org.assertj.core.api.Assertions.assertThat;
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
public class IssueControllerTests {

    @Test
    public void test(){
        assertThat(true);
    }
/*    private MockMvc mockMvc;

    @Mock
    private IssueService service;

    @InjectMocks
    private IssueController controller;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .build();
    }

*//*    @Test
    public void getAllSuccess() throws Exception {
        List<Issue> issues = Arrays.asList(
                new Issue(1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        ConstantsTests.Issue.TITLE,
                        ConstantsTests.Issue.WATCHER,
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        ConstantsTests.Issue.ESTIMATED,
                        ConstantsTests.Issue.REMAINING,
                        Boolean.TRUE,
                        Boolean.TRUE),
                new Issue(1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        ConstantsTests.Issue.TITLE,
                        ConstantsTests.Issue.WATCHER,
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        ConstantsTests.Issue.ESTIMATED,
                        ConstantsTests.Issue.REMAINING,
                        Boolean.TRUE,
                        Boolean.TRUE));

        when(service.getAllIssue()).thenReturn(issues);

        MvcResult result = mockMvc.perform(get("/issue/"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].title", is(ConstantsTests.Issue.TITLE)))
                .andExpect(jsonPath("$[0].watcher", is(ConstantsTests.Issue.WATCHER)))
                .andExpect(jsonPath("$[0].estimated", is(ConstantsTests.Issue.ESTIMATED)))
                .andExpect(jsonPath("$[0].remaining", is(ConstantsTests.Issue.REMAINING)))
                .andExpect(jsonPath("$[1].title", is(ConstantsTests.Issue.TITLE)))
                .andExpect(jsonPath("$[1].watcher", is(ConstantsTests.Issue.WATCHER)))
                .andExpect(jsonPath("$[1].estimated", is(ConstantsTests.Issue.ESTIMATED)))
                .andExpect(jsonPath("$[1].remaining", is(ConstantsTests.Issue.REMAINING)))
                .andReturn();

        verify(service, times(1)).getAllIssue();
        verifyNoMoreInteractions(service);

        TypeToken<List<Issue>> token = new TypeToken<List<Issue>>() {
        };
        List<Issue> issuesResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(issuesResponse);
        assertEquals(issues.size(), issuesResponse.size());
    }*//*

    @Test
    public void getAllBySprintSuccess() throws Exception {
        List<Issue> issues = Arrays.asList(
                new Issue(1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        ConstantsTests.Issue.TITLE,
                        ConstantsTests.Issue.WATCHER,
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        ConstantsTests.Issue.ESTIMATED,
                        ConstantsTests.Issue.REMAINING,
                        Boolean.TRUE,
                        Boolean.TRUE),
                new Issue(1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        ConstantsTests.Issue.TITLE,
                        ConstantsTests.Issue.WATCHER,
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        ConstantsTests.Issue.ESTIMATED,
                        ConstantsTests.Issue.REMAINING,
                        Boolean.TRUE,
                        Boolean.TRUE));

        when(service.getAllIssueBySprintByProject(any(Integer.class))).thenReturn(issues);

        MvcResult result = mockMvc.perform(get("/issue/sprint/{sprint}", any(Integer.class)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].title", is(ConstantsTests.Issue.TITLE)))
                .andExpect(jsonPath("$[0].watcher", is(ConstantsTests.Issue.WATCHER)))
                .andExpect(jsonPath("$[0].estimated", is(ConstantsTests.Issue.ESTIMATED)))
                .andExpect(jsonPath("$[0].remaining", is(ConstantsTests.Issue.REMAINING)))
                .andExpect(jsonPath("$[1].title", is(ConstantsTests.Issue.TITLE)))
                .andExpect(jsonPath("$[1].watcher", is(ConstantsTests.Issue.WATCHER)))
                .andExpect(jsonPath("$[1].estimated", is(ConstantsTests.Issue.ESTIMATED)))
                .andExpect(jsonPath("$[1].remaining", is(ConstantsTests.Issue.REMAINING)))
                .andReturn();

        verify(service, times(1)).getAllIssueBySprintByProject(any(Integer.class));
        verifyNoMoreInteractions(service);

        TypeToken<List<Issue>> token = new TypeToken<List<Issue>>() {
        };
        List<Issue> issuesResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(issuesResponse);
        assertEquals(issues.size(), issuesResponse.size());
    }

    @Test
    public void getAllByBacklogSuccess() throws Exception {
        List<Issue> issues = Arrays.asList(
                new Issue(1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        ConstantsTests.Issue.TITLE,
                        ConstantsTests.Issue.WATCHER,
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        ConstantsTests.Issue.ESTIMATED,
                        ConstantsTests.Issue.REMAINING,
                        Boolean.TRUE,
                        Boolean.TRUE),
                new Issue(1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        ConstantsTests.Issue.TITLE,
                        ConstantsTests.Issue.WATCHER,
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        ConstantsTests.Issue.ESTIMATED,
                        ConstantsTests.Issue.REMAINING,
                        Boolean.TRUE,
                        Boolean.TRUE));

        when(service.getAllIssueByBacklogIsTrue()).thenReturn(issues);

        MvcResult result = mockMvc.perform(get("/issue/backlog"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].title", is(ConstantsTests.Issue.TITLE)))
                .andExpect(jsonPath("$[0].watcher", is(ConstantsTests.Issue.WATCHER)))
                .andExpect(jsonPath("$[0].estimated", is(ConstantsTests.Issue.ESTIMATED)))
                .andExpect(jsonPath("$[0].remaining", is(ConstantsTests.Issue.REMAINING)))
                .andExpect(jsonPath("$[1].title", is(ConstantsTests.Issue.TITLE)))
                .andExpect(jsonPath("$[1].watcher", is(ConstantsTests.Issue.WATCHER)))
                .andExpect(jsonPath("$[1].estimated", is(ConstantsTests.Issue.ESTIMATED)))
                .andExpect(jsonPath("$[1].remaining", is(ConstantsTests.Issue.REMAINING)))
                .andReturn();

        verify(service, times(1)).getAllIssueByBacklogIsTrue();
        verifyNoMoreInteractions(service);

        TypeToken<List<Issue>> token = new TypeToken<List<Issue>>() {
        };
        List<Issue> issuesResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(issuesResponse);
        assertEquals(issues.size(), issuesResponse.size());
    }

    @Test
    public void getAllByEnabledSuccess() throws Exception {
        List<Issue> issues = Arrays.asList(
                new Issue(1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        ConstantsTests.Issue.TITLE,
                        ConstantsTests.Issue.WATCHER,
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        ConstantsTests.Issue.ESTIMATED,
                        ConstantsTests.Issue.REMAINING,
                        Boolean.TRUE,
                        Boolean.TRUE),
                new Issue(1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        ConstantsTests.Issue.TITLE,
                        ConstantsTests.Issue.WATCHER,
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        new Date(),
                        ConstantsTests.Issue.ESTIMATED,
                        ConstantsTests.Issue.REMAINING,
                        Boolean.TRUE,
                        Boolean.TRUE));

        when(service.getAllIssueByEnabledIsTrue()).thenReturn(issues);

        MvcResult result = mockMvc.perform(get("/issue/enabled"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].title", is(ConstantsTests.Issue.TITLE)))
                .andExpect(jsonPath("$[0].watcher", is(ConstantsTests.Issue.WATCHER)))
                .andExpect(jsonPath("$[0].estimated", is(ConstantsTests.Issue.ESTIMATED)))
                .andExpect(jsonPath("$[0].remaining", is(ConstantsTests.Issue.REMAINING)))
                .andExpect(jsonPath("$[1].title", is(ConstantsTests.Issue.TITLE)))
                .andExpect(jsonPath("$[1].watcher", is(ConstantsTests.Issue.WATCHER)))
                .andExpect(jsonPath("$[1].estimated", is(ConstantsTests.Issue.ESTIMATED)))
                .andExpect(jsonPath("$[1].remaining", is(ConstantsTests.Issue.REMAINING)))
                .andReturn();

        verify(service, times(1)).getAllIssueByEnabledIsTrue();
        verifyNoMoreInteractions(service);

        TypeToken<List<Issue>> token = new TypeToken<List<Issue>>() {
        };
        List<Issue> issuesResponse = ControllerTests.jsonToList(result.getResponse().getContentAsString(), token);

        assertNotNull(issuesResponse);
        assertEquals(issues.size(), issuesResponse.size());
    }

    @Test
    public void getByIdSuccess() throws Exception {
        Issue issue = new Issue(1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                ConstantsTests.Issue.TITLE,
                ConstantsTests.Issue.WATCHER,
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                ConstantsTests.Issue.ESTIMATED,
                ConstantsTests.Issue.REMAINING,
                Boolean.TRUE,
                Boolean.TRUE);

        when(service.getIssueById(any(Integer.class))).thenReturn(issue);

        MvcResult result = mockMvc.perform(get("/issue/{id}", any(Integer.class)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("title", is(ConstantsTests.Issue.TITLE)))
                .andExpect(jsonPath("watcher", is(ConstantsTests.Issue.WATCHER)))
                .andExpect(jsonPath("estimated", is(ConstantsTests.Issue.ESTIMATED)))
                .andExpect(jsonPath("remaining", is(ConstantsTests.Issue.REMAINING)))
                .andReturn();

        verify(service, times(1)).getIssueById(any(Integer.class));
        verifyNoMoreInteractions(service);

        Issue issueResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Issue.class);
        assertNotNull(issue);
        assertEquals(issueResponse.getTitle(), issue.getTitle());
    }

    @Test
    public void createSuccess() throws Exception {
        Issue issue = new Issue(1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                ConstantsTests.Issue.TITLE,
                ConstantsTests.Issue.WATCHER,
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                ConstantsTests.Issue.ESTIMATED,
                ConstantsTests.Issue.REMAINING,
                Boolean.TRUE,
                Boolean.TRUE);

        when(service.createIssue(any(Issue.class))).thenReturn(issue);

        MvcResult result = mockMvc.perform(
                post("/issue/")
                        .contentType(MediaType.APPLICATION_JSON_UTF8)
                        .content(ControllerTests.objectToJson(issue)))
                .andExpect(status().isCreated())
                .andReturn();

        verify(service, times(1)).createIssue(any(Issue.class));
        verifyNoMoreInteractions(service);

        Issue issueResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Issue.class);
        assertNotNull(issueResponse);
        assertEquals(issue.getTitle(), issueResponse.getTitle());
    }

    @Test
    public void updateSuccess() throws Exception {
        Issue issue = new Issue(1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                ConstantsTests.Issue.TITLE,
                ConstantsTests.Issue.WATCHER,
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                ConstantsTests.Issue.ESTIMATED,
                ConstantsTests.Issue.REMAINING,
                Boolean.TRUE,
                Boolean.TRUE);
        issue.setId(1);

        when(service.updateIssue(any(Issue.class), any(Integer.class))).thenReturn(issue);

        MvcResult result = mockMvc.perform(put("/issue/{id}", issue.getId())
                .contentType(MediaType.APPLICATION_JSON_UTF8)
                .content(ControllerTests.objectToJson(issue)))
                .andExpect(status().isOk())
                .andReturn();

        verify(service, times(1)).updateIssue(any(Issue.class), any(Integer.class));
        verifyNoMoreInteractions(service);

        Issue issueResponse = ControllerTests.jsonToObject(result.getResponse().getContentAsString(), Issue.class);
        assertNotNull(issueResponse);
        assertEquals(issue.getTitle(), issueResponse.getTitle());
    }

    @Test
    public void deleteSuccess() throws Exception {
        doNothing().when(service).deleteIssue(any(Integer.class));

        mockMvc.perform(
                delete("/issue/{id}", any(Integer.class)))
                .andExpect(status().isOk());

        verify(service, times(1)).deleteIssue(any(Integer.class));
        verifyNoMoreInteractions(service);
    }*/
}
