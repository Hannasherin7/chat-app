FROM maven:3.9.8-eclipse-temurin-17-alpine AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -q package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/backend-java-0.0.1-SNAPSHOT.jar ./backend.jar
EXPOSE 8080
CMD ["java", "-jar", "backend.jar"]
