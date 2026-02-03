# Technical Brief: Operations Analytics Dashboard

## The Problem
Leadership cannot manage what they cannot see. In our previous operational model, compliance risks were "invisible" until an annual HUD inspection, and process bottlenecks (like work orders stuck for 30+ days) were only discovered reactively when a tenant complained. Managers were forced to manually compile data from three different systems to get even a basic understanding of workload distribution.

## The Solution
I built a **Maintenance Operations Dashboard** on the **ServiceNow Zurich release** using **Platform Analytics**. My objective was to move from static reporting to a live dashboard that helps leadership see what's happening in real-time. I designed a set of high-priority metrics that bring together data from the Compliance, Alert, and Procurement apps into one simple view, allowing managers to see risks and move resources where they are needed.

---

## Technical Architecture

### Dashboard Metrics & Data
I set up 5 key metrics within the **Platform Analytics** tool to help managers take action:
1.  **Critical Compliance Risk:** A single-score widget tracking open Life-Threatening deficiencies. This uses a real-time data source to ensure regulatory exposure is visible in seconds, not hours.
2.  **Work Speed:** I designed a metric to show the **Average Days to Close** a ticket. This identifies if maintenance work is meeting our goals.
3.  **Bottle Neck Identification:** I set up a "Stalled" filter logic specifically to flag work orders that have not moved in >7 days, highlighting where additional human oversight is required.
4.  **Work Distribution:** Using clear charts, I grouped the work by **Trade Category** (HVAC, Plumbing, etc.) to see which teams are the busiest.

*   **Making it Fast:** To ensure the dashboard loads quickly, I optimized the data sources to only look at the records we need for our specific apps and date ranges.
*   **Realistic Test Data:** To make sure the charts looked right, I created a script that added 50+ example records with different dates and statuses. This allowed me to verify that the trends and charts worked correctly before turning the dashboard over to users.

---

## Key Features
*   **At-a-Glance Executive Reporting:** Consolidated visibility across all three major maintenance applications.
*   **Real-Time Risk Monitoring:** Automated tracking of high-severity compliance deficiencies.
*   **Trend-Based Decision Making:** Visual metrics that show process efficiency over a 90-day window.
*   **Easy Metrics Setup:** The widgets are designed to be easily changed if the business needs change later.

## How to Review
To evaluate the data modeling and visualization strategy, please review:
*   **Test Data Setup:** `scripts/DataGenerator.js` - See how I built the script to simulate realistic work data.
*   **Priority View:** Check the full view screenshots below to see how I used colors and layout to highlight the most critical risks.

---

## Screenshots

### Dashboard Full View
![Dashboard](assets/01_dashboard_full_view.png)  
*Complete dashboard showing 5 operational metrics including deficiency tracking, alert processing, and workload distribution*

### Work Orders by Category
![Pie Chart](assets/02_work_orders_by_category.png)  
*Workload distribution across 7 maintenance categories for resource planning*

---

- Data Visualization
- Test Data Generation

---
**Developed by Laurenda Landry**  
*10 years experience in Industrial Operations & Compliance*
