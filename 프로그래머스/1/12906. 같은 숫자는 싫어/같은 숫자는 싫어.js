function solution(arr)
{
    var answer = [];
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            answer.push(arr[i]); // 비교 후 같지 않다면 push
        }
    }
    
    return answer;
}