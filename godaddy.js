'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* 
    return -1 if H is good
    return i index where the first pair appears
*/
function isGood(H) {
    for (var i = 1; i < H.length; i++) {
        if (H[i] == H[i-1]) {
            return i;
        }
    }
    return -1;
}

function minCost(H,M,cost) {
    
    var pairIndex = isGood(H);
    
    /* 
        Given a pairIndex check recursively if the better cost comes from adding on the left or the right side of the pair.
    */
    while (pairIndex != -1) {
        var larray = H.slice();
        var rarray = H.slice();
        
        larray[pairIndex] += 1;
        rarray[pairIndex-1] += 1;
        
        var lcost = minCost(larray, M, cost+M[pairIndex]);
        var rcost = minCost(rarray, M, cost+M[pairIndex-1]);
        
        if (lcost < rcost) {
            H = larray;
            cost += M[pairIndex];
        } else {
            H = rarray;
            cost += M[pairIndex - 1];
        }
        
        pairIndex = isGood(H);
    }
    
    return cost;
}

function main() {
    const N = parseInt(readLine(), 10);

    let H = [];
    let M = [];

    for (let i = 0; i < N; i++) {
        const tower = readLine().split(' ');

        H.push(parseInt(tower[0], 10));
        M.push(parseInt(tower[1], 10));
    }
    
    const cost = minCost(H, M, 0);

    console.log(cost);
}