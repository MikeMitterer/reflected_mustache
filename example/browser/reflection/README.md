# Test reflected_mustache in browser

Run this example with:

    webdev serve

## Docker / NGINX
Another way to run the example is to use Nginx with Docker.

As a basis checkout https://hub.docker.com/_/nginx/ on Docker-Hob

Here just a short command how I run it:

     pub run build_runner build --output web:deploy && \
        docker run --name mikemitterer.nginx --rm -ti \
            -v $(pwd)/config:/etc/nginx/conf.d \
            -v $(pwd)/deploy:/var/www/html \
            -p 8080:80 mikemitterer/mikemitterer.nginx