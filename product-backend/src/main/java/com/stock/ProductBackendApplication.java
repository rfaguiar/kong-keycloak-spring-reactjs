package com.stock;

import com.stock.model.Product;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@SpringBootApplication
public class ProductBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductBackendApplication.class, args);
	}

	@Bean
	public RepositoryRestConfigurer configurationExposeIdProduct() {
		return new RepositoryRestConfigurer() {
			@Override
			public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
				config.exposeIdsFor(Product.class);
			}
		};
	}

}
