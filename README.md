# FaaS Comparison: AWS Lambda vs. Google Cloud Run Functions

This project provides a performance comparison between AWS Lambda and Google Cloud Run Functions to determine which FaaS provider is the best fit for specific use cases.

### 📂 Repository Contents

### 📊 Presentations (`.pptx`)
The main analysis is contained in the presentation slides, available in two languages. They cover workflows, cold starts, stress tests, and cost analysis.
* **English Version:** AWS_vs_GCF.pptx
* **Italian Version:** AWS_vs_GCF_ENG.pptx

### 🧪 Test Scripts (`.js`)
The repository includes the **k6** load testing scripts used to gather performance data:
* `idle_test_aws.js`: Script for testing AWS Lambda idle times and cold starts.
* `idle_test_gcf.js`: Script for testing Google Cloud Run Functions.

### 📈 Reports
* `Cold_Start`: A sample report showing the metrics and experimental values recorded during the testing phase.
