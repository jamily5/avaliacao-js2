var alunos = [
    {id: 1, nome: "Jake", bim1: 10, bim2: 10, bim3: 10, bim4: 10, media: 0},
    {id: 2, nome: "Tobirama", bim1: 9, bim2: 7, bim3: 4, bim4: 9, media: 0},
    {id: 3, nome: "Levi", bim1: 4, bim2: 7, bim3: 2, bim4: 9, media: 0}
]

let resultado = alunos.map(aluno => {
    aluno.media = (aluno.bim1 + aluno.bim2 + aluno.bim3 + aluno.bim4)/4;
    
    if(aluno.media == 10) {
        console.log("Aluno exemplar")
    } else if (aluno.media >= 7 && aluno.media < 10) {
        console.log("Aprovado")
    } else {
        console.log("Recuperação")
    }
})