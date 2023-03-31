/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
    let num=n;
        let sol=1;
        let cnt=1;
        while(sol<=num){
            sol*=cnt;
            cnt=cnt+1;}
    return cnt-2;
}