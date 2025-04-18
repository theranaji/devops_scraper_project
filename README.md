# DevOps Scraper Project

## 📦 Build the Docker Image
```bash
docker build -t devops-scraper .
```

## 🚀 Run the Container with URL to Scrape
```bash
docker run -e SCRAPE_URL=https://www.tripadvisor.in-p 5001:5001 devops-scraper
```

## 🌐 Access the Data
Open your browser and go to:
```
http://localhost:5001
```

You will see the scraped JSON data from the specified URL.
