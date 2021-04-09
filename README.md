# How to run Freifunk Vogtland Map

```
git clone https://github.com/FreifunkVogtland/ffv-meshviewer-config.git ./meshviewer-ffv
docker build -t meshviewer .
docker run -it -p 8080:80 meshviewer
```