function arrayStats(arr) {
    if (arr===null||arr===undefined){
        return {}
    }
    let min=arr[0],max=arr[0],sum=0,avg=0
    for (let i=1; i<arr.length; i++) {
        if (arr[i]<min){
            min=arr[i]
        }
        if (arr[i]>max){
            max=arr[i]
        }
        sum+=arr[i]
    }

    return {min:min,max:max,sum:sum,avg:sum/arr.length}
}
arrNum=[3,4,1,7,8,5,15]
console.log(arrayStats(arrNum))