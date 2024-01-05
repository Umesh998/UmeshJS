function Chiron()
{
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//Array of month
    for(let x in month)  // for in syntax ()
    {
        console.log(x);
        console.log(obj[x]);
    }

    let ume = 'Bugatti';

    for(let y of ume)
    {
        console.log(y);
    }
}

function agera()
{
    let obj = { Bugatti: 'Chiron', Porsche: 'dakar' };

    for(let y in obj)
    {
        console.log(y);
        console.log(obj[y]);
    }
} 