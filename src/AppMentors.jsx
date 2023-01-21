import React, {useReducer} from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors() {

    const [person, dispatch] = useReducer(personReducer, initialPerson);

    // const [person, setPerson] = useState(initialPerson);
    
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({ type:'updated', prev, current });
        // setPerson((person)=>({
        //     ...person,
        //     mentors:person.mentors.map((mentor)=>{
        //         if ( prev === mentor.name ) {
        //             return { ...mentor, name : current }
        //         }
        //         return mentor;
        //     }),
        // }));
    }

    const handleAdd = () => {
        const name = prompt(`추가할 멘토의 이름을 입력하세요.`);
        const title = prompt(`멘토의 타이틀을 입력하세요.`);
        dispatch({ type:'added', name, title });
        // setPerson((person)=>({
        //     ...person,
        //     // mentors : [...person.mentors, { name , title }],   //배열 리터럴 문법
        //     mentors : person.mentors.concat({name , title}),      //concat 함수 사용
        // }));
    }

    const handleDelete = () => {
        const name = prompt(`삭제할 멘토의 이름을 입력하세요.`);
        dispatch({ type:'deleted', name });
        // setPerson((person)=>({
        //     ...person,
        //     mentors : person.mentors.filter((mentor)=> mentor.name !== name),
        // }));
    }

    return (
        <>
            <h1>{person.name}이는 {person.title}</h1>
            <p>{person.name}의 멘토는:</p> 
            <ul>
                {person.mentors.map((mentor, index)=>(
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}    
            </ul>
            <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
        </>
    )
};


const initialPerson = {
    name: '사은',
    title: '주니어 프론트개발자',
    mentors : [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ]
}
