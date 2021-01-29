import React, { useRef } from 'react'
import { SketchField, Tools } from 'react-sketch'
import { Button } from 'react-bootstrap'
import { saveAs } from 'file-saver'
const styles = {
    draw: {
        margin: '0 auto',
        border: '2px solid #555'
    }
}
const Draw = () => {
    const sketch = useRef();
    const handleSubmit = () => {
        const canvas = sketch.current.toDataURL();
        saveAs(canvas, 'digit.jpeg')
        sendData(canvas);
    }
    const handleReset = () => {
        sketch.current.clear();
        sketch.current._backgroundColor('black');
    }
    const sendData = (c) => {
        console.log(c);
    }
    const getImageResult = (id) => { }
    return (
        <React.Fragment>
            <SketchField width='800px' height="600px" tool={Tools.Pencile}
                backgroundColor='black'
                lineColor="white"
                style={styles.draw}
                imageFormat="jpg"
                lineWidth={20}
                ref={sketch}
            />
            <div className="mt-4">
                <Button onClick={handleSubmit} variant="primary">Save</Button>
                <Button onClick={handleReset} variant="secondary">Reset</Button>
            </div>
        </React.Fragment >

    );
}

export default Draw