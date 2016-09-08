app.filter('lengthFilter', () => {
    return (timeSeconds) => {
        let minutes = Math.floor(timeSeconds / 60);
        let seconds = timeSeconds - (minutes * 60);
        if (seconds < 10) {
            seconds = '0' + seconds.toString();
        }
        return `${minutes}:${seconds}`
    }
})
