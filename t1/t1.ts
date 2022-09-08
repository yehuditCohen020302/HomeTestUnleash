/*My result:
I think that the performance issue in this function,
that she is waite many time until the values returned from the server.
to solve it better, I do that the call to this function
 that calls with the server, will be in the return line.
now, the two calls executed together.
*/

async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
}
async function myFunc()
{
// let x1 = await getNumberFromServer(); // 3 sec
// let x2 = await getNumberFromServer(); // 5 sec
return await getNumberFromServer() + await getNumberFromServer();
// return x1 + x2;
}
console.log(myFunc());
