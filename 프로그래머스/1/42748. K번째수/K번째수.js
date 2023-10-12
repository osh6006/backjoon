function solution(array, commands) {
    return commands.reduce((prev, curr)=>{
        const [start, end, number] = curr;
        prev.push(array.slice(start-1,end).sort((a,b)=>a-b)[number-1]);
        return prev;
    }, [])
}