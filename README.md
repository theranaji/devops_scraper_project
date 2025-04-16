# DevOps Scraper Project

## 📦 Build the Docker Image
```bash
docker build -t devops-scraper .
```

## 🚀 Run the Container with URL to Scrape
```bash
docker run -e SCRAPE_URL=https://example.com -p 5000:5000 devops-scraper
```

## 🌐 Access the Data
Open your browser and go to:
```
http://localhost:5000
```

You will see the scraped JSON data from the specified URL.
