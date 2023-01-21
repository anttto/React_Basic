import React, {useState} from 'react';

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: '사은',
        title: '주니어 프론트개발자',
        mentor : {
            name: '도하엘',
            title: '시니어개발자',
        },
    });

    return (
        <>
        <h1>
            {person.name}이는 {person.title}
        </h1>
        <p>
            {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
        </p>
        <button 
            onClick={()=>{
                const name = prompt(`what's your mentor's name?`);
                setPerson((person)=>({
                    ...person, 
                    mentor : {
                        ...person.mentor, name : name  
                    }
                }));
            }}
        >
        멘토 이름 바꾸기
        </button>
        <button 
            onClick={()=>{
                const title = prompt(`what's your mentor's title?`);
                setPerson((person)=>({
                    ...person, 
                    mentor : {
                        ...person.mentor, title : title  
                    }
                }));
            }}
        >
        멘토 타이틀 바꾸기
        </button>
        </>
    )
};

