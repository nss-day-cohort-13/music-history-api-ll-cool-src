app.filter('lengthFilter', () => {
    return (timeSeconds) => {
        let hours = Math.floor(timeSeconds / 3600);
        let minutes = Math.floor(timeSeconds / 60);
        let seconds = timeSeconds - (minutes * 60);
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        if (hours > 0) {
            return `${hours}:${minutes}:${seconds}`
        } else {
            return `${minutes}:${seconds}`
        }
    }
})
