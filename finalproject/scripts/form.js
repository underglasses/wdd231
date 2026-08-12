const params = new URLSearchParams(window.location.search);

document.getElementById('firstName').textContent = params.get('firstName');
document.getElementById('lastName').textContent = params.get('lastName');
document.getElementById('email').textContent = params.get('email');
document.getElementById('phone').textContent = params.get('phone');
document.getElementById('organization').textContent = params.get('organization');

// Handle timestamp
const timestampParam = params.get('timestamp');
if (timestampParam) {
  // Convert to number if it's stored as milliseconds
  const submittedDate = new Date(Number(timestampParam));

  // Format exact date/time
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };
  const formattedDate = submittedDate.toLocaleString('en-US', options);

  // Calculate relative time
  const now = Date.now();
  const diffMs = now - submittedDate.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  let relativeText = "";

  if (diffMinutes < 1) {
    relativeText = "Submitted just now";
  } else if (diffMinutes === 1) {
    relativeText = "Submitted 1 minute ago";
  } else if (diffMinutes < 60) {
    relativeText = `Submitted ${diffMinutes} minutes ago`;
  } else {
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours === 1) {
      relativeText = "Submitted 1 hour ago";
    } else if (diffHours < 24) {
      relativeText = `Submitted ${diffHours} hours ago`;
    } else {
      const diffDays = Math.floor(diffHours / 24);
      relativeText = `Submitted ${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    }
  }

  // Show both exact and relative
  document.getElementById('timestamp').textContent = `${formattedDate} (${relativeText})`;
}
