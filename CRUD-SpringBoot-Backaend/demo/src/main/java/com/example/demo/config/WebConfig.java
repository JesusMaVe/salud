package com.example.demo.config; 

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(
                    "http://localhost:5173",     // Para desarrollo local
                    "http://localhost:5174",     // Para desarrollo local
                    "http://frontend:80",        // Para comunicación entre contenedores
                    "http://localhost:80",       // Para acceder desde el host
                    "http://127.0.0.1:5173",    // Alternativa para desarrollo local
                    "http://127.0.0.1:80"       // Alternativa para el host
                )
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600); // Cache de preflight durante 1 hora
    }
}
/*    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Permitir todas las rutas
                .allowedOrigins("http://localhost:5173") // Cambia esto si tu frontend está en otro origen
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos permitidos
                .allowedHeaders("*") // Permitir todos los encabezados
                .allowCredentials(true); // Permitir credenciales (opcional)
    }
}*/
