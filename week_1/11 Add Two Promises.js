var addTwoPromises = async function(promise1, promise2) {
    const [result1, result2] = await Promise.all([promise1, promise2]);
    const sum = result1 + result2;
    return Promise.resolve(sum);
};
