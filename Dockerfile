# Stage 1: Scraping with Node.js
FROM node:18-slim AS scraper

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN apt-get update && \
    apt-get install -y chromium && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY scrape.js package.json ./
RUN npm install

ENV SCRAPE_URL=https://www.tripadvisor.in
RUN node scrape.js

# Stage 2: Serving with Python
FROM python:3.10-slim

WORKDIR /app
COPY --from=scraper /app/scraped_data.json ./
COPY server.py requirements.txt ./

RUN pip install -r requirements.txt

EXPOSE 5001
CMD ["python", "server.py"]
