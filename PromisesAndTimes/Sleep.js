async function sleep(millis) {
    await new Promise((resolve) => setTimeout(resolve, millis));
}

sleep(2000).then(() => console.log("Hi"));