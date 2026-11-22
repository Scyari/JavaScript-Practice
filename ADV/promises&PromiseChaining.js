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
// console.log();  //{Pending}

fetchData()
    .then((data) => {
        console.log(data);  //Data fetched Successfully
        return `Scyther`;
    })
    .then((value) => {
        console.log(value);  //Scyther
    })
    .catch((error) => console.log(error));  