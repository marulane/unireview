package org.unireview;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.unireview.config.JwtFilter;

@SpringBootApplication
public class UniReviewApplication {

	public static void main(String[] args) {
		SpringApplication.run(UniReviewApplication.class, args);
	}
	
	@Bean
	public FilterRegistrationBean<JwtFilter> jwtFilter(){
		FilterRegistrationBean<JwtFilter> registrationBean = 
				new FilterRegistrationBean<JwtFilter>();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/unireview/carreras/*");
		registrationBean.addUrlPatterns("/unireview/usuarios/*");
		registrationBean.addUrlPatterns("/unireview/escuelas/*");
		registrationBean.addUrlPatterns("/unireview/ofertas/*");
		registrationBean.addUrlPatterns("/unireview/publicaciones/*");
		return registrationBean;
	}//jwtFilter

}
