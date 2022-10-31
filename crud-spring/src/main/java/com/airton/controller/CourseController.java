package com.airton.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.airton.model.Course;
import com.airton.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController // "Fala" pro Spring que é um endpoint (por trás é Java Servlet)
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {
	
	private CourseRepository courseRepository;
	
	// Aqui abaixo a injeção de dependência
	// Dava pra fazer com @Autowired também
	// Tirei pq a anotação do Lombok @AllArgsConstructor faz isso
	
	//public CourseController(CourseRepository courseRepository) {
	//	this.courseRepository = courseRepository;
	//}
	
	@GetMapping()
	public List<Course> list() {
		return courseRepository.findAll();
	}
}