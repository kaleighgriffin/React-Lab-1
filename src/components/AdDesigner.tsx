import { useState } from 'react';
import './AdDesigner.css';

function AdDesigner() {

    const [ flavor, setFlavor ] = useState("");
    const [ theme, setTheme ] = useState(false);
    const [ size, setSize ] = useState(20);

    function strawberry() {
        setFlavor("Strawberry");
    }

    function chocolate() {
        setFlavor("Chocolate");
    }

    function vanilla() {
        setFlavor("Vanilla");
    }

    function dark() {
        setTheme(true);
    }

    function light() {
        setTheme(false);
    }

    let additionalClass = "";
    if (theme === true) {
        additionalClass = " dark"
    }

    const styles = {
        fontSize: size + "px",
        fontFamily: "Caveat"
    }

    function sizeUp() {
        setSize(prev => prev + 5);
    }

    function sizeDown() {
        setSize(prev => prev - 5);
    }

    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
            <div className={"VoteBox" + additionalClass}>
                <h3>Vote For</h3>
                <p style={styles}>{flavor}</p>
            </div>
            <p><h3>What to Support</h3></p>
            <p>
                <button onClick={chocolate}>Chocolate</button>
                <button onClick={vanilla}>Vanilla</button>
                <button onClick={strawberry}>Strawberry</button>
            </p>
            <p><h3>Color Theme</h3></p>
            <p>
                <button onClick={light}>Light</button>
                <button onClick={dark}>Dark</button>
            </p>
            <p><h3>Font Size</h3></p>
            <p>
                <button onClick={sizeDown}>Down</button>
                {size}
                <button onClick={sizeUp}>Up</button>
            </p>
        </div>
    )

}

export default AdDesigner;