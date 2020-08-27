#构建阶段
FROM node:12.18.3 as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#运行阶段
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
