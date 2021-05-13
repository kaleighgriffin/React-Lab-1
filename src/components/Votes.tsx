import { useState } from 'react';
import './Votes.css';

function Votes() {

    const [ voteChocolate, setChocolate ] = useState(0);
    const [ voteVanilla, setVanilla ] = useState(0);
    const [ voteStrawberry, setStrawberry ] = useState(0);

    function sizeUpChocolate() {
        setChocolate(prev => prev + 1)
    }

    function sizeUpVanilla() {
        setVanilla(prev => prev + 1)
    }

    function sizeUpStrawberry() {
        setStrawberry(prev => prev + 1)
    }

    const chocolateStyle= {
        width: voteChocolate + "px",
    }

    const vanillaStyle= {
        width: voteVanilla + "px",
    }

    const strawberryStyle= {
        width: voteStrawberry + "px",
    }

    let totalVotes = voteChocolate + voteStrawberry + voteVanilla;

    return (
        <div className="Vote">
            <h2>Vote Here</h2>
            <button onClick={sizeUpChocolate}>Chocolate</button>
            <button onClick={sizeUpVanilla}>Vanilla</button>
            <button onClick={sizeUpStrawberry}>Strawberry</button>
            <div>
                <p className="ChocolateBar" style={chocolateStyle}>Chocolate</p>
                {/* <p>{voteChocolate}Percentage: {(voteChocolate / totalVotes)*100}%</p> */}
            </div>
            <div>
                <p className="VanillaBar" style={vanillaStyle}>Vanilla</p>
                {/* <p>{voteVanilla}Percentage: {(voteVanilla / totalVotes)*100}%</p> */}
            </div>
            <div>
                <p className="StrawberryBar" style={strawberryStyle}>Strawberry</p>
                {/* <p>{voteStrawberry}Percentage: {(voteStrawberry / totalVotes)*100}%</p> */}
            </div>
        </div>
    )

}

export default Votes;