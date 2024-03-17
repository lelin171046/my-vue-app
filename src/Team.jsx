import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    const teamstyle = {
        border: '4px solid white',
        margin: '10px',
        padding: '15px'
    }
    const handleButton =() =>{
        const newTeam = team + 1;
        setTeam(newTeam)

    }
    const handleButton2 = () => {
        setTeam(team - 1)
    }
    return(
        <div style={teamstyle}>
            <h3>PLayer:{team}</h3>
            <button onClick={handleButton}>Add</button>
            <button onClick={handleButton2}>CickOUt</button>
        </div>
    )
}
