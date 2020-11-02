const INITIAL_STATE = 
    {
        activeModule: {title: "Nenhum modulo selecionado"},
        activeLesson: {title: "Nenhuma aula selecionad"},
        modules: [
            {
                id: 1,
                title: "Iniciando com React",
                lessons: [
                    {id:1, title: "Primeira Aula"},
                    {id:2, title: "Segunda Aula"}
                ]
            },
            {
                id: 2,
                title: "Aprendendo Redux",
                lessons: [
                    {id: 3, title: "Terceira Aula"},
                    {id: 4, title: "Quarta Aula"}
                ]
            }
        ]
    }

export default function course(state = INITIAL_STATE, action){
    console.log({state})
    console.log({action})

    if (action.type === 'TOGGLE_LESSON') {
        return {...state, activeModule: action.module, activeLesson: action.lesson}
    }

    return state
}