import React, { useState } from 'react';
import PalierMeter from '../data/PalierMeter.json'

const PurchasePanel = () => {
    //Hooks
    const [meterLength, setMeterLenght] = useState(0);
    const [meter, setMeter] = useState();
    const [price, setPrice] = useState();
    const [feeze, setFeeze] = useState();
    const [total, setTotal] = useState();
    const [palier, setPalier] = useState('...')
    const [resultKwh, setResultKwh] = useState();
    const [priceReadOnly, setPriceReadOnly] = useState(true);

    console.log('cptr saisi:' + meter + ' type:' +typeof(meter) + 
    '\nLenght:' + meterLength + ' type:' + typeof(meterLength) +
    '\nreaOnly:' + priceReadOnly + '\nPalier:'+ palier + 
    '\nprix:' + price + ' type:'+ typeof(price) +
    '\nfrais:' + feeze +' type:'+ typeof(feeze) +
    '\ntotal:'+ total + ' type:'+ typeof(total)+ 
    '\nresultKw:' + resultKwh + ' type:' + typeof(resultKwh))


    //Checking palier
    let tcheckF =PalierMeter.family.includes(meter, [0]);
    let tcheckFP = PalierMeter.familyPlus.includes(meter, [0]);
    let tcheckPro = PalierMeter.professional.includes(meter, [0]);
    let tcheckPre = PalierMeter.premium.includes(meter, [0]);

    const handleChangeMeter = (e)=>{
        if (e.target.name==="meter_number") {
            setMeter(e.target.value);
            setMeterLenght(e.target.value.length);
            setPrice();
            setFeeze(0);
            setTotal(0); 
            setResultKwh(0);
        }
    }

    const handleKeyUpMeter =(e) =>{
    if (meterLength === '' || (tcheckF === false && tcheckFP === false && tcheckPro === false && tcheckPre === false)) {
        setPriceReadOnly(true);
        // setFeeze(0);
        // setTotal(0);
        // setResultKwh(0);
        setPalier('...');
    } else {
        setPriceReadOnly(false);
        if (tcheckF === true) {
            setPalier('Family');
        } else if (tcheckFP === true) {
            setPalier('Family+');
        } else if (tcheckPro === true) {
            setPalier('Professional')
        } else if (tcheckPre === true) {
            setPalier('Premium');
        }
    }}
    
    const handleChangePrice =(e)=>{
        setPrice(parseInt(e.target.value));
    }

    const handleKeyUpPrice =(e)=>{ 
        if (tcheckF === true) {
            // price.addEventListener('blur', simulfam);
            // price.addEventListener('change', simulation);
            // setPalier('Family');
            (()=>{
                if (price < 500) {
                    setFeeze(0);
                    setTotal(0);
                    setResultKwh(0);
                } else if (price >= 500 && price <= 5000) {
                    setFeeze(150);
                } else if (price > 5000 && price <= 10000) {
                    setFeeze(250);
                } else if (price > 10000 && price <= 50000) {
                    setFeeze(450);
                } else if (price > 50000 && price <= 100000) {
                    setFeeze(550);
                } else if (price > 100000) {
                    setFeeze(800);
                };
                if (price >= 500) {
                    setTotal (price + feeze);
                    setResultKwh((100 * price) / 5000);
                }
            })()
        } else if (tcheckFP === true) {
            // price.addEventListener('blur', simulFamPl);
            // price.addEventListener('change', simulation);
            // setPalier('Family+');
            (()=>{
                if (price < 500) {
                    setFeeze(0);
                    setTotal(0);
                    setResultKwh(0);
                } else if (price >= 500 && price <= 5000) {
                    setFeeze(200);
                } else if (price > 5000 && price <= 10000) {
                    setFeeze(300);
                } else if (price > 10000 && price <= 50000) {
                    setFeeze(500);
                } else if (price > 50000 && price <= 100000) {
                    setFeeze(600);
                } else if (price > 100000) {
                    setFeeze(850);
                };
                if (setPrice >= 500) {
                    setTotal(parseInt(price, 10) + parseInt(feeze, 10));
                    setResultKwh((95 * price) / 5000);
                }
            })();
        } else if (tcheckPro === true) {
            // price.addEventListener('blur', simulPro);
            // price.addEventListener('change', simulation);
            // setPalier('Professional');
                (()=>{
                if (setPrice < 500) {
                    setFeeze(0);
                    setTotal(0);
                    setResultKwh(0);
                } else if (price >= 500 && price <= 5000) {
                    setFeeze(250);
                } else if (price > 5000 && price <= 10000) {
                    setFeeze(350);
                } else if (price > 10000 && price <= 50000) {
                    setFeeze(550);
                } else if (price > 50000 && price <= 100000) {
                    setFeeze(650);
                } else if (price > 100000) {
                    setFeeze(900);
                };
                if (price >= 500) {
                    setTotal(parseInt(price, 10) + parseInt(feeze, 10));
                    setResultKwh((90 * price) / 5000);
            }
                })();
        } else if (tcheckPre === true) {
            // price.addEventListener('blur', simulPrem);
            // price.addEventListener('change', simulation);
            // setPalier('Premium');
            (()=>{
                if (price < 500) {
                    setFeeze(0);
                    setTotal(0);
                    setResultKwh(0);
                } else if (price >= 500 && price <= 5000) {
                    setFeeze(300);
                } else if (price > 5000 && price <= 10000) {
                    setFeeze(400);
                } else if (price > 10000 && price <= 50000) {
                    setFeeze(500);
                } else if (price > 50000 && price <= 100000) {
                    setFeeze(700);
                } else if (price > 100000) {
                    setFeeze(950);
                };
                if (price >= 500) {
                    setTotal(parseInt(price, 10) + parseInt(feeze, 10));
                    setResultKwh((85 * price) / 5000);
            }
            })();
        }
    }

    const submitForm = (e) =>{
        e.preventDefault();
        console.log('Enter Pressed');
    }

    const align={textAlign:'right'};

    return (
        <div className='purchase_board' >
    <div id="level-1">
        <h4>Achetez du crédit de recharge</h4>
    </div>
    <form method="post" action="rigolazNode.js" onSubmit={submitForm}>
        {/* Bloquer la soumission par entrée */}
        <div className="level-2">
            <span className="label_num_meter">
            <label htmlFor="meter_number">N° Compteur:</label>
            </span>
            <div className='meterAndLength'>
            <span id='meter-lenght'>{meterLength}</span>
            <input type="tel" maxLength={12} value={meter} onChange={handleChangeMeter} onKeyUp={handleKeyUpMeter} name="meter_number" id="meter-number" style={align} placeholder='0' required="required" />
            <span id='palier1'>Palier:{palier}</span>
            </div>
        </div>
        <div className="level-3">
            <div className="level-31">
        <div className='notification'>Saisissez le montant ici</div>
                <div className="level-prix">
                    <span className="label_price">
                    <label htmlFor="price">Prix:</label>
                </span>
                    <input type="number" value={price} readOnly={priceReadOnly} onChange={handleChangePrice} onKeyUp={handleKeyUpPrice}  name="amount" min='500' id="price" style={align} placeholder='0' required="required" />
                    <span className="xfa">XFA</span>
                </div>
                <div className="level-frais">
                    <span className="label_price">
                <label htmlFor="feeze">Frais:</label>
                </span>
                    <input style={align} type="number" id="feeze" value={feeze} placeholder='0' readOnly={true} />
                    <span className="xfa">XFA</span>
                </div>
                <div className="level-total">
                    <span className="label_total">
                <label htmlFor="total">Total:</label>
                </span>
                    <input style={align} type="number" id="total" value={total} placeholder='0' readOnly={true} />
                    <span className="xfa">XFA</span>
                </div>
            </div>
            <div className="section"></div>
            <div className="level-32">
                <div>
                    <span className="label_quantite">
                        <label htmlFor="resultKwh">Quantité</label></span>
                    <div className="result">
                        <span>
                            <input style={align} type="number" id="resultKwh" value={resultKwh} name="equiv_kwh" readOnly="readonly" placeholder='0' />
                        </span>
                        <span className="unity">Kwh</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="level-4">
            <input type="submit" id="valPurch" value="Valider" />
        </div>
    </form>
    <div id="level-5">
        <h3>Modes de paiement
        </h3>
    </div>
    <div className="level-6">
        <img src="../img/momo_logo.jpg" alt='Momo'/>
        <img src="../img/om_logo.png" alt='Om'/>
        <img src="../img/possa_logo.png" alt='Possa'/>
        <img src="../img/cb_logo.jpg" alt='CB'/>
        <img src='../img/Blue-Home-copie-360x289.jpg' alt='blue' />
    </div>
    </div>
    );
};

export default PurchasePanel;