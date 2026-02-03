/**
 * @BackgroundScript: Dashboard Test Data Generator
 * 
 * Why: To demonstrate the analytics capabilities, I created a robust 
 * test dataset using a server-side background script. I chose to build 
 * a randomized date distribution to simulate a 90-day operational 
 * period, allowing for realistic efficiency metrics and trend analysis.
 */

var categories = ['HVAC', 'Plumbing', 'Electrical', 'Appliance', 'Carpentry', 'General', 'Fire Safety'];
var states = ['open', 'in_progress', 'stalled', 'closed'];

for (var i = 0; i < 50; i++) {
    var gr = new GlideRecord('u_work_order');
    gr.initialize();

    // Randomized Categorization
    var catIndex = Math.floor(Math.random() * categories.length);
    gr.category = categories[catIndex];

    // Randomized State Distribution
    var stateIndex = Math.floor(Math.random() * states.length);
    gr.state = states[stateIndex];

    // Date Injection Logic
    var randomDays = Math.floor(Math.random() * 90);
    var gdt = new GlideDateTime();
    gdt.addDaysLocalTime(-randomDays);
    gr.opened_at = gdt;

    if (gr.state == 'closed') {
        var duration = Math.floor(Math.random() * 10);
        var closeDate = new GlideDateTime(gdt);
        closeDate.addDaysLocalTime(duration);
        gr.closed_at = closeDate;
    }

    gr.short_description = "Simulated Request: " + gr.category + " Maintenance";
    gr.insert();
}
