Convert Spring Boot to an executable jar file .

1- create an executable JAR. With Maven, you run ./mvnw install

2 Run the jar using a docker file 
	A basic Dockerfile to run that JAR would then look like this, at the top level of your project:
	
	FROM openjdk:17-jdk-slim
	ARG JAR_FILE=FlixTogether/target/*.jar
	COPY ${JAR_FILE} application.jar
	EXPOSE 8080:
	ENTRYPOINT ["java","-jar","/application.jar"]
	
3 - Then we can build an image with the following command:
	docker build -t springservice.
	
3 - Then we can run it by running the following command:
	docker run -p 8080:8080 springservice

