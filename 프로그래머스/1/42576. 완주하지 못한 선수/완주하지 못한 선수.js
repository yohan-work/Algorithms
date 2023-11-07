function solution(participant, completion) {
    participant.sort(); // 참가자
    completion.sort(); // 완주자
    
    for(var i = 0; i<participant.length; i++){
        if(participant[i] !== completion[i]){
            // index 0 => 순차적으로 두 배열 비교
            return participant[i];
            // 비 완주자가 참가자 배열에 나올 경우 출력
        }
    }
}