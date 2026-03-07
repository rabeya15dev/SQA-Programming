// 0 1 1 2 3 5 8 13 21 34 55 ........

fibonacci(18);

function fibonacci(limit){
    let series = [0,1];
    let result;
    for (i = 2; i < limit; i++){
        result = series [ i - 1 ] + series[ i - 2 ];
        series.push(result);
    }
    console.log(series);
}