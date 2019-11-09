test:
	cd client && npm test && cd -
	cd server && ./gradlew test && cd -
	rm -rf server/src/main/resources/static/built
	cd client && npm run build && cd -
	cd server && ./gradlew build && cd -
	cd server && (java -jar build/libs/reactspring-0.0.1-SNAPSHOT.jar &) && cd -
	cd client && npm run e2e && cd -
	jps -l | grep build/libs/reactspring-0.0.1-SNAPSHOT.jar | cut -d" " -f1 | xargs kill -KILL

run-client:
	cd client && npm start

run-server: build-jar
	cd server && ./gradlew bootRun

build-jar:
	rm -rf server/src/main/resources/static/built
	cd client && npm run build && cd -
	cd server && ./gradlew build -x test

deploy: build-jar test
	cf push