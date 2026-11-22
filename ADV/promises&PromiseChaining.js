function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched Successfully");
            } else {
                reject("Error fetching Data");
            }
        }, 3000);
    });
}

// let response = fetchData();
// console.log();