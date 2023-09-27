FROM svl-devops-harbor.fortilab.fortinet.com/tec/hugo-builder:v1.0.2 AS hugo-builder
# arg subfolder should match the project name
# --build-arg subfolder=example/
ARG subfolder=/
ARG version=0.0.0
WORKDIR /project
RUN rm -rf content
COPY /content/ /project/content/
COPY /config.toml /project/
RUN echo $subfolder
RUN if grep -q baseURL config.toml; then \
    sed -i.bk  "s|^.*baseURL *=.*$|baseURL = \"http://tec.myfortinet.com/${subfolder}\"|" config.toml; \
    else \
    sed -i.bk "1s|^.*baseURL *=.*$|baseURL = \"http://tec.myfortinet.com/${subfolder}\"|" config.toml; \
    fi
RUN if grep -q "version\s*=" config.toml; then \
    sed -i.bk "s/^\s*version\s*=.*/  version=\"$version\"/" config.toml; \
    else \
    sed -i.bk "/^\s*\[params]\s*$/a version=\"$version\"" config.toml; \
    fi
RUN hugo

FROM nginx:latest AS nginx
# --build-arg subfolder=example/
# ARG scope is in each build stage
ARG subfolder=/
WORKDIR /usr/share/nginx/html/${subfolder}
COPY --from=hugo-builder /project/public/ ./


