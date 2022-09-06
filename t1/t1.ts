

async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
    return await 1;
}

async function myFunc()
{
let x1 = await getNumberFromServer(); // 3 sec
let x2 = await getNumberFromServer(); // 5 sec
return x1 + x2;
}
