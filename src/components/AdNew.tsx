import './AdDesigner.css';

interface Props {
    flavor: string,
    fontSize: number,
    theme: boolean
}

function AdDesigner({flavor, fontSize, theme}: Props) {

    const styles = {
        fontSize: fontSize + "px",
        fontFamily: "Caveat"
    }

    let additionalClass = "";
    if (theme === true) {
        additionalClass = " dark"
    }

    // let moreStyles = {
    //     margin: 20 + "px",
    //     flexDirection: "column"
    // }

    return (
        <div className={"VoteBox2" + additionalClass}>
            <h3>Vote For</h3>
            <p style={styles}>{flavor}</p>
        </div>
    )

}

export default AdDesigner;