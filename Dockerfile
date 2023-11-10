# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
ENV REACT_APP_KAKAO_JS_KEY="01fb7482c48091ff2902ca19375b2a37" \
	REACT_APP_GOOGLE_CLIENT_KEY="" \
	GENERATE_SOURCEMAP=false

WORKDIR /usr/src/app
COPY krampoline/ ./
RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", build"]
