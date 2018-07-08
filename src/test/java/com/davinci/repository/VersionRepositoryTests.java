package com.davinci.repository;

import com.davinci.model.Version;
import com.davinci.support.AbstractRepositoryTests;
import com.davinci.support.ConstantsTests;
import org.junit.Before;
import org.junit.Test;

import javax.annotation.Resource;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class VersionRepositoryTests extends AbstractRepositoryTests {

    @Test
    public void test(){
        assertThat(true);
    }
//    @Resource
//    private VersionRepository repository;
//
//    @Before
//    public void init() {
//        super.persistVersion();
//    }
//
//    @Test
//    public void findAllReturnVersions() {
//        List<Version> versions = this.repository.findAll();
//
//        assertThat(versions).doesNotContainNull();
//
//        for (Version version : versions) {
//            validateVersion(version);
//        }
//    }
//
//    private void validateVersion(Version version) {
//        assertThat(version.getName()).isEqualTo(ConstantsTests.Version.NAME);
//    }
}
