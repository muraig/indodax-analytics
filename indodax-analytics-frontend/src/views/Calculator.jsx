import React, {useState} from 'react';

const Calculator = (props) => {
    const [buy, setBuy] = useState(0);
    const [opit, setOpit] = useState(0);
    const [sell, setSell] = useState(0);


    const handleOnBuyChange = (e) => {
        setBuy(parseInt(e.target.value));
    };
    const handleOnOpitChange = (e) => {
        setOpit(parseFloat(e.target.value));
    };
    const handleOnSellPress = () => {
        let sell = (opit / 100) * buy + buy;
        setSell(sell)
    };



    return (
        <div className="container" style={{"background-color": "white", "margin-top": "50px", "margin-bottom": "50px"}}>
            <div>
                <h2 style={{display: "flow-root", "text-align": "center"}}>Selling price for profit</h2>
            </div>
            <div className="text-center mt-2">
                <table className="table borderless">
                    <tbody>
                    <tr>
                        <th>Buy price: </th>
                        <td><input type="number" name="buy" onChange={handleOnBuyChange}/><br/></td>
                    </tr>
                    <tr>
                        <th>Opit plan (percentage):</th>
                        <td><input  type="number" name="opit" onChange={handleOnOpitChange}/></td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={handleOnSellPress}>Count</button>
                <h2 className="mt-4">Selling price</h2>
                <h1>{sell}</h1>
            </div>

        </div>
    );
};

export default Calculator;