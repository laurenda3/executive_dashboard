# Maintenance Operations Dashboard

## Overview

Provides executive-level real-time visibility into maintenance operations, compliance health, and process efficiency through a consolidated analytics dashboard. Demonstrates **business intelligence capabilities** by translating operational data into strategic KPIs: compliance risk indicators, process bottleneck detection, efficiency metrics, and resource allocation insights.

## Business Problem Solved

**Before:**
- No centralized view of maintenance operations performance
- Reactive management - problems discovered too late
- Compliance risks hidden until inspections
- No visibility into process bottlenecks (stuck work orders)
- Executives had to manually compile reports from multiple systems

**After:**
- Single-screen view of critical operational metrics
- Proactive risk identification (critical deficiencies, stuck workflows)
- Real-time compliance monitoring (NSPIRE tracking)
- Process health visibility (average response time, bottlenecks)
- Data-driven resource allocation (work distribution by category)

## Technical Implementation

### Dashboard Platform

**Platform:** ServiceNow Platform Analytics  
**Dashboard Type:** Homepage Dashboard (in-line editor)  
**Data Sources:** Custom maintenance tables (Work Orders, Deficiencies, Alerts)  
**Visualization Types:** Single-score metrics, pie charts  
**Target Users:** Property managers, maintenance supervisors, executives

### Key Widgets

1. **Critical Deficiencies Open**
   - **Metric:** COUNT of life-threatening deficiencies not yet corrected
   - **Filter:** Severity = Life-Threatening AND Status ≠ Closed
   - **Business Value:** Regulatory compliance risk indicator
   - **Icon:** Red warning triangle
   - **Current Value:** 2 open items

2. **Alerts Not Processed**
   - **Metric:** COUNT of maintenance alerts requiring action
   - **Filter:** Processed = false
   - **Business Value:** Shows items falling through cracks
   - **Icon:** Yellow bell
   - **Current Value:** 0 (all caught)

3. **Work Orders Stuck > 7 Days**
   - **Metric:** COUNT of work orders in progress for more than 7 days
   - **Filter:** State = In Progress AND Opened > 7 days ago
   - **Business Value:** Process bottleneck indicator
   - **Icon:** Blue pause
   - **Current Value:** 0 (no bottlenecks)

4. **Average Days to Close**
   - **Metric:** AVERAGE duration between work order opened and closed dates
   - **Filter:** State = Closed, Last 30 days
   - **Business Value:** Efficiency and responsiveness metric
   - **Icon:** Green checkmark (if <7 days), Red clock (if >14 days)
   - **Target:** <7 days industry standard

5. **Work Orders by Category**
   - **Visualization:** Pie chart
   - **Group By:** Category (HVAC, Plumbing, Electrical, Appliance, Building Exterior, Landscaping, Safety)
   - **Filter:** Show all work orders (or open only)
   - **Business Value:** Resource allocation and staffing decisions
   - **Current Distribution:** Shows workload across 7 maintenance categories

## Data Model

### Custom Tables Created

**u_work_orders** - Maintenance work orders (50 test records)
- Fields: Category, Priority, State, Short Description, Opened Date, Closed Date
- Categories: HVAC, Plumbing, Electrical, Appliance, Building Exterior, Landscaping, Safety
- States: New, Assigned, In Progress, Completed, Closed

**u_deficiency_item** - NSPIRE compliance deficiencies
- Fields: Severity, Status, Deficiency Description, Correction Deadline
- Linked to: NSPIRE Inspections table

**u_maintenance_alert** - Real-time maintenance alerts
- Fields: Alert Type, Equipment Type, Severity, Processed (boolean)
- Auto-creates incidents via business rules

### Test Data Generation

Created background scripts to populate realistic test data:
- 50 work orders with varied dates, categories, and statuses
- Distribution across 90-day period for trend analysis
- Mix of open and closed work orders for efficiency calculations

## Design Decisions

### Color Scheme

**Red (`#DC3545`)** - Critical/Urgent (deficiencies, stuck workflows)  
**Yellow/Orange (`#FF9800`)** - Warning/Attention needed (unprocessed alerts)  
**Green (`#28A745`)** - Positive/On track (meeting targets)  
**Blue (`#2196F3`)** - Informational (neutral metrics)

### Widget Icons

- **Warning Triangle:** Critical compliance issues
- **Bell:** Alert notifications
- **Pause Icon:** Stuck/stalled processes
- **Clock/Stopwatch:** Time-based metrics
- **Pie Chart:** Distribution/allocation data

### Layout Strategy

**Row 1:** Critical metrics requiring immediate attention  
**Row 2:** Process health and efficiency metrics  
**Row 3:** Strategic/resource planning visualizations

## Business Value Demonstrated

### 1. Compliance Management
Shows ability to monitor regulatory requirements (HUD NSPIRE)

### 2. Process Optimization
Identifies bottlenecks and efficiency improvements

### 3. Resource Allocation
Data-driven staffing and workload distribution

### 4. Executive Communication
Translates technical data into business-level insights

### 5. Proactive Risk Management
Early warning system for problems before they escalate

## Key Features Demonstrated

- ✅ **Data Aggregation:** COUNT, AVERAGE functions
- ✅ **Filtering Logic:** Complex multi-condition filters
- ✅ **Date Calculations:** Relative date filtering (last 30 days, >7 days ago)
- ✅ **Data Visualization:** Pie charts, single-score metrics
- ✅ **UX Design:** Color-coding, icons, visual hierarchy
- ✅ **Business Metrics:** KPIs aligned with operational goals
- ✅ **Custom Tables:** Created domain-specific data model

## Technologies

- ServiceNow Platform Analytics
- Homepage Dashboards (In-line Editor)
- Platform Analytics Data Sources
- JavaScript (background scripts for test data)
- Data Visualization Widgets

## Real-World Application

This dashboard approach applies to:
- **Property Management:** Maintenance operations across portfolios
- **Facilities Management:** Building maintenance tracking
- **IT Operations:** Service desk performance metrics
- **Healthcare:** Equipment maintenance and compliance
- **Manufacturing:** Preventive maintenance scheduling

Demonstrates understanding of strategic visibility—going beyond operational ticketing to provide executive decision-support through data-driven insights.

## Screenshots

### Dashboard Full View
![Dashboard Full View](assets/01_dashboard_full_view.png)
*Executive-level dashboard showing 5 operational metrics: Critical Deficiencies, Alerts Not Processed, Work Orders Stuck, Average Days to Close, and Work Orders by Category*

### Work Orders by Category
![Work Orders by Category](assets/02_work_orders_by_category.png)
*Pie chart visualization showing maintenance workload distribution across 7 categories: HVAC, Plumbing, Electrical, Appliance, Building Exterior, Landscaping, and Safety*

### Filter Configuration
![Filter Configuration](assets/03_deficiency_filter_config.png)
*Multi-condition filtering for compliance tracking - demonstrates technical ability to configure complex data filters*

### Executive View
![Executive View](assets/04_dashboard_executive_view.png)
*Clean dashboard view optimized for stakeholder presentations - shows end-user experience*

## Author

Laurenda Landry  
[LinkedIn](https://linkedin.com/in/lauland) | [Portfolio](https://lauland.dev)

---

*Built with ServiceNow Platform Analytics (Zurich Release)*
