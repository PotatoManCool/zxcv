async function podschet(){
    const response1 = await fetch("./useranswers.json")
    const data1 = await response1.json();

    if(data1.answers.lenght>0){
        console.log("=)");
    }
    else{console.log("=(")}
}