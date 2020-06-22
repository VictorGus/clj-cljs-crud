FROM openjdk:11-jre
#EXPOSE 9090

ADD app.jar /app.jar

CMD java -XX:-OmitStackTraceInFastThrow \
  -Dcom.sun.management.jmxremote \
  -Dcom.sun.management.jmxremote.host=127.0.0.1 \
  -Djava.rmi.server.hostname=127.0.0.1 \
  -Dcom.sun.management.jmxremote.port=9099 \
  -Dcom.sun.management.jmxremote.authenticate=false \
  -Dcom.sun.management.jmxremote.ssl=false\
  -jar /app.jar -m app.core