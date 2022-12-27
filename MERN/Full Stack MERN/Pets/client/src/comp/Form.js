import React, { useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Form = (props) => {
    const { initialName,initialType,initialDescreption,initialSkillOne , initialSkillTwo , initialSkillThree, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [descreption, setDescreption] = useState(initialDescreption);
    const [skill1, setSkill1] = useState(initialSkillOne);
    const [skill2, setSkill2] = useState(initialSkillTwo);
    const [skill3, setSkill3] = useState(initialSkillThree);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name,type ,descreption , 'skills.skill1' :skill1 , 'skills.skill2' : skill2 , 'skills.skill3' : skill3}  );
    }
  return (
    <div>
        <Link to ={"/players/list"}>Back To Dashboard</Link>
<form onSubmit={onSubmitHandler}>
            <p>
                <label>Name : </label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                {props.children}
            </p>
            <p>
                <label>Type :</label><br/>
                <input type="text" onChange={(e)=>setType(e.target.value)} value={type}/>
            </p>
            <p>
                <label>Descreption : </label><br/>
                <input type="text" onChange={(e)=>setDescreption(e.target.value)} value={descreption}/>
            </p>
            <h3>Optional : </h3>
            <p>
                <label>Skill 1 :</label><br/>
                <input type="text" onChange={(e)=>setSkill1(e.target.value)} value={skill1}/>
            </p>
            <p>
                <label>Skill 2 : </label><br/>
                <input type="text" onChange={(e)=>setSkill2(e.target.value)} value={skill2}/>
            </p>
            <p>
                <label>Skill 3 : </label><br/>
                <input type="text" onChange={(e)=>setSkill3(e.target.value)} value={skill3}/>
            </p>

            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form