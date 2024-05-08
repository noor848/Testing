**Commands**

 - node: `docker pull node`
 - K6: `docker pull grafana/k6`

We also have a separate image you can use with chromium installed to run k6 browser tests.

    docker pull grafana/k6:master-with-browser

Run on Windows :

    cat .{nameOfFile}.js | docker run -i grafana/k6 run -

