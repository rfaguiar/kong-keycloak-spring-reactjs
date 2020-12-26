FROM openjdk:11
WORKDIR usr/src
ADD ./target/product-backend*.jar /usr/src/product-backend.jar
ENTRYPOINT ["java", "-jar", "product-backend.jar"]