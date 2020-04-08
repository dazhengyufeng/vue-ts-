FROM nginx
COPY dist /usr/share/nginx/html #copy dist/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
