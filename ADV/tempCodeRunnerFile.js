function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Arindam Saha", url: "http://aridam.com" });
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();   //await because of "async"
        console.log("User data:", userData);
    } catch (error) {
        console.log("Error fetching data", error);
    }
}
getUserData();