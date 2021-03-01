const getTimeAgo = (unixTimeSeconds) => {
    let now = new Date(Date.now());
    let diff = Math.floor(now/1000) - unixTimeSeconds;
    
    if (diff < 60) return diff + "s ago";
    if (diff < 3600) return Math.floor(diff / 60) + "m ago";
    if (diff < 86400) return Math.floor(diff / 3600) + "h ago";

    let postDate = new Date(unixTimeSeconds*1000);

    let yearsAgo = now.getFullYear() - postDate.getFullYear();
    if (yearsAgo > 0) return yearsAgo + "y ago";

    let monthsAgo = now.getMonth() - postDate.getMonth();
    if (monthsAgo > 0) return monthsAgo + "mo ago";

    return Math.floor(diff / 86400) + "d ago";
}

export default getTimeAgo;