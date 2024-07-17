async function podschet(){
    const response0 = await fetch("./bd.json")
    const data0 = await response0.json();
    const response1 = await fetch("./useranswers.json")
    let data1 = await response1.json();

    obj = JSON.parse(data1);
    shareInfoLen = Object.keys(obj.answers[0]).length;  

    console.log(shareInfoLen)

    let score =0;
    let salka;
    
    let siz
    while(data1.answers.id != undefined){
        siz++
    }
    console.log(siz)

    /*for(i=0;i!=1;i++){
        salka=data1.answers[i];
        if(data0.questions[salka.id].answers[salka.answer].correct){
            score++;
        }
    }*/
    console.log(score)
}
podschet()


