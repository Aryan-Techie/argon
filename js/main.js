 // Calculate development percentage based on date
 document.addEventListener('DOMContentLoaded', function() {
    try {
        // Define start and end dates (fixed starting date to ensure consistent progression)
        const startDate = new Date('April 5, 2025 00:00:00 GMT+0530'); // Fixed start date
        const endDate = new Date('July 1, 2025 00:00:00 GMT+0530'); // End date (IST timezone)
        const currentDate = new Date(); // Today's date
        
        // Starting and ending percentages
        const startPercentage = 51;
        const endPercentage = 97;
        
        // Calculate total date range in milliseconds
        const totalDateRange = endDate.getTime() - startDate.getTime();
        
        // Calculate elapsed time since start date
        const elapsedTime = currentDate.getTime() - startDate.getTime();
        
        // Calculate progress ratio (clamped between 0 and 1)
        const progressRatio = Math.max(0, Math.min(1, elapsedTime / totalDateRange));
        
        // Calculate current percentage (rounded to nearest integer)
        const currentPercentage = Math.round(startPercentage + (progressRatio * (endPercentage - startPercentage)));
        
        // Get the percentage element and update its content
        const percentageElement = document.querySelector('.status-percentage');
        if (percentageElement) {
            percentageElement.innerHTML = currentPercentage + '%';
        }

        // Also update the progress bar width if it exists
        const developmentStatus = document.querySelector('.development-status::before');
        if (developmentStatus) {
            developmentStatus.style.width = currentPercentage + '%';
        }
        
        console.log("Current development percentage: " + currentPercentage + "%");
    } catch (error) {
        console.error("Error calculating percentage:", error);
    }
});