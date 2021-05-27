package io.blainelafreniere.employeesystem;

import io.blainelafreniere.employeesystem.controllers.EmployeeController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class EmployeeSystemApplicationTests {

	@Autowired
	private EmployeeController employeeController;

	@Test
	void contextLoads() throws Exception {
		assertThat(employeeController).isNotNull();
	}
}
