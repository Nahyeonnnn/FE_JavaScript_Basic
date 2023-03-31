/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
    let cnt1 = 0;
    let cnt2 = 0;

    let answer=num_list;
    answer.map((num)=>{
        if(num%2===0){
            cnt1++;
        }
        else{
            cnt2++;
        }
        return num;
    })
    
    return [cnt1, cnt2];
}