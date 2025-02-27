FROM nginx:1.27.0-alpine-slim

# Remove default nginx configuration
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy our custom configuration
COPY siteconf.conf /etc/nginx/conf.d/

# Copy the HTML file
COPY index.html /var/www/html/

# Expose port 80
EXPOSE 80

# Command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]
