exports.calculateTime = () => {
    let begin = new Date(1939, 0, 1);
    let now = new Date();
    let date = {
        years() {
            return (now.getFullYear() - begin.getFullYear());
        },

        months() {
            return (now.getMonth() - begin.getMonth());
        },

        days() {
            return (now.getDate() - begin.getDate());
        }
    }
    return date
}

