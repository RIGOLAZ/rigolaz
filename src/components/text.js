import React, { useState } from 'react';

const PurchasePanel = () => {
    //This list must be in a server server
            let family = ['014277200001', '014277200002', '014277200003', '014294725701'];
            let familyPlus = ['014277210001', '014277210002', '014277210003', '014277210004'];
            let professional = ['014277220001', '014277220002', '014277220003', '014277220004'];
            let premium = ['014277230001', '014277230002', '014277230003', '014277230004'];

    //Hooks
            const [data, setData] = useState({
                meterLength: 0,
                meter:0,
                price:0,
                feeze:0,
                total:0,
                palier:'...',
                resultKwh:0,
                priceReadOnly: true
            });
        
            const ResetState = () => {
                setData ( {
                    price:0,
                    feeze:0,
                    total:0,
                    resultKwh:0,
                })
            } 
            
            const InitData = () => {
                setData ( {
                    feeze:0,
                    total:0,
                    resultKwh:0
                })
            }

            const setFeeze =  (price, feeze, frais, taxe) => {
                    let Total = (parseInt(price, 10) + parseInt(feeze, 10))
                    let Resutl = (taxe * price) / 5000
                    setData ( {
                        feeze:frais,
                        total: Total,
                        resultKwh: Resutl
                    })
            }
    //Hooks


   /*  const [meterLength, setMeterLenght] = useState(0);
    const [meter, setMeter] = useState();
    const [price, setPrice] = useState();
    const [feeze, setFeeze] = useState();
    const [total, setTotal] = useState();
    const [palier, setPalier] = useState('...')
    const [resultKwh, setResultKwh] = useState();
    const [priceReadOnly, setPriceReadOnly] = useState(true); */

    // console.log('cptr saisi:' + data.meter + '\nLenght:' + data.meterLength +
    // '\nreaOnly:' + data.priceReadOnly + '\nPalier:'+ data.palier + '\nprix:' + data.price + '\nfrais:' + data.feeze + '\ntotal:'+ data.total)


    //Checking palier
    let tcheckF = family.includes(data.meter, [0]);
    let tcheckFP = familyPlus.includes(data.meter, [0]);
    let tcheckPro = professional.includes(data.meter, [0]);
    let tcheckPre = premium.includes(data.meter, [0]);

    const handleChangeMeter = (e)=>{
        if (e.target.name==="meter_number") {
           /*  setMeter(e.target.value);
            setMeterLenght(e.target.value.length); */
            const val = e.target.value
            const taille = e.target.value.length

            
            setData({
                meterLength: taille,
                meter: val
            })
            console.log('valeur = '+data.meter);
            ResetState()
            /* setPrice('');
            setFeeze(0);
            setTotal(0); 
            setResultKwh(0); */
        }
    }

    const handleKeyUpMeter =(e) =>{
    if (data.meter === '' || (tcheckF === false && tcheckFP === false && tcheckPro === false && tcheckPre === false)) {
        setData({
            priceReadOnly: true,
            palier: '...'
        })
        // setPriceReadOnly(true);
        // setFeeze(0);
        // setTotal(0);
        // setResultKwh(0);
        // setPalier('...');
    } else {
        setData({
            priceReadOnly: false
        })
        // setPriceReadOnly(false);
        if (tcheckF === true) {
            setData({
                palier: 'Family'
            })
            // setPalier('Family');
        } else if (tcheckFP === true) {
            setData({
                palier: 'Family+'
            })
            // setPalier('Family+');
        } else if (tcheckPro === true) {
            setData({
                palier: 'Professional'
            })
            // setPalier('Professional')
        } else if (tcheckPre === true) {
            setData({
                palier: 'Premium'
            })
            // setPalier('Premium');
        }
    }}
    
    const handleChangePrice =(e)=>{
        setData({
            price: e.target.value
        })
        // setPrice(e.target.value);
    }

    const handleKeyUpPrice = (e)=>{
        if (tcheckF === true) {
                    // price.addEventListener('blur', simulfam);
                    // price.addEventListener('change', simulation);
                    // setPalier('Family');
            (((price)=>{
                if (price < 500) {
                    InitData()
                    // setFeeze(0);
                    // setTotal(0);
                    // setResultKwh(0);
                } else if (price >= 500 && price <= 5000) {
                    setFeeze(price, data.feeze, 150, 100)
                    // setFeeze(150);
                } else if (price > 5000 && price <= 10000) {
                    setFeeze(price, data.feeze, 250, 100)
                    // setFeeze(250);
                } else if (price > 10000 && price <= 50000) {
                    // setFeeze(450);
                    setFeeze(price, data.feeze, 450, 100)
                } else if (price > 50000 && price <= 100000) {
                    setFeeze(price, data.feeze, 550, 100)
                    // setFeeze(550);
                } else {
                    setFeeze(price, data.feeze, 800, 100)
                    // setFeeze(800);
                }
                // if (price >= 500) {
                //     setTotal(parseInt(price, 10) + parseInt(feeze, 10));
                //     setResultKwh((100 * price) / 5000);
                // }
            })())
        } else if (tcheckFP === true) {
                    // price.addEventListener('blur', simulFamPl);
                    // price.addEventListener('change', simulation);
                    // setPalier('Family+');
            (()=>{
                if (data.price < 500) {
                    InitData()
                    // setFeeze(0);
                    // setTotal(0);
                    // setResultKwh(0);
                } else if (data.price >= 500 && data.price <= 5000) {
                    setFeeze(data.price, data.feeze,200, 95);
                } else if (data.price > 5000 && data.price <= 10000) {
                    setFeeze(data.price, data.feeze,300, 95);
                } else if (data.price > 10000 && data.price <= 50000) {
                    setFeeze(data.price, data.feeze,500, 95);
                } else if (data.price > 50000 && data.price <= 100000) {
                    setFeeze(data.price, data.feeze,600, 95);
                } else if (data.price > 100000) {
                    setFeeze(data.price, data.feeze,850, 95);
                };
                // if (setPrice >= 500) {
                //     setTotal(parseInt(price, 10) + parseInt(feeze, 10));
                //     setResultKwh((95 * price) / 5000);
                // }
            })();
        } else if (tcheckPro === true) {
                    // price.addEventListener('blur', simulPro);
                    // price.addEventListener('change', simulation);
                    // setPalier('Professional');
                (()=>{
                if (data.setPrice < 500) {
                    InitData()
                    // setFeeze(0);
                    // setTotal(0);
                    // setResultKwh(0);
                } else if (data.price >= 500 && data.price <= 5000) {
                    setFeeze(data.price, data.feeze, 250, 90);
                } else if (data.price > 5000 && data.price <= 10000) {
                    setFeeze(data.price, data.feeze, 350, 90);
                } else if (data.price > 10000 && data.price <= 50000) {
                    setFeeze(data.price, data.feeze, 550, 90);
                } else if (data.price > 50000 && data.price <= 100000) {
                    setFeeze(data.price, data.feeze, 650, 90);
                } else if (data.price > 100000) {
                    setFeeze(data.price, data.feeze, 900, 90);
                };
            //     if (price >= 500) {
            //         setTotal(parseInt(price, 10) + parseInt(feeze, 10));
            //         setResultKwh((90 * price) / 5000);
            // }
                })();
        } else if (tcheckPre === true) {
                    // price.addEventListener('blur', simulPrem);
                    // price.addEventListener('change', simulation);
                    // setPalier('Premium');
            (()=>{
                if (data.price < 500) {
                    InitData()
                    // setFeeze(0);
                    // setTotal(0);
                    // setResultKwh(0);
                } else if (data.price >= 500 && data.price <= 5000) {
                    setFeeze(data.price, data.feeze, 300, 85);
                } else if (data.price > 5000 && data.price <= 10000) {
                    setFeeze(data.price, data.feeze, 400, 85);
                } else if (data.price > 10000 && data.price <= 50000) {
                    setFeeze(data.price, data.feeze, 500, 85);
                } else if (data.price > 50000 && data.price <= 100000) {
                    setFeeze(data.price, data.feeze, 700, 85);
                } else if (data.price > 100000) {
                    setFeeze(data.price, data.feeze, 950, 85);
                };
            //     if (price >= 500) {
            //         setTotal(parseInt(price, 10) + parseInt(feeze, 10));
            //         setResultKwh((85 * price) / 5000);
            // }
            })();
        }
    }

//Pour éviter l'envoi du formulaire par appuie sur Entrée.
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
            <span id='meter-lenght'>{data.meterLength}</span>
            <input type="tel" maxLength={12} value={data.meter} onChange={handleChangeMeter} onKeyUp={handleKeyUpMeter} name="meter_number" id="meter_number" style={align} placeholder='0' required="required" />
            <span id='palier1'>Palier:{data.palier}</span>
            </div>
        </div>
        <div className="level-3">
            <div className="level-31">
                <div className='notification'>Saisissez le montant ici</div>
                <div className="level-prix">
                    <span className="label_price">
                    <label htmlFor="price">Prix:</label>
                </span>
                    <input type="number" value={data.price} readOnly={data.priceReadOnly} onChange={handleChangePrice} onKeyUp={handleKeyUpPrice}  name="amount" min='500' id="price" style={align} placeholder='0' required="required" />
                    <span className="xfa">XFA</span>
                </div>
                <div className="level-frais">
                    <span className="label_price">
                <label htmlFor="feeze">Frais:</label>
                </span>
                    <input style={align} type="number" id="feeze" value={data.feeze} placeholder='0' readOnly={true} />
                    <span className="xfa">XFA</span>
                </div>
                <div className="level-total">
                    <span className="label_total">
                <label htmlFor="total">Total:</label>
                </span>
                    <input style={align} type="number" id="total" value={data.total} placeholder='0' readOnly={true} />
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
                            <input style={align} type="number" id="resultKwh" value={data.resultKwh} name="equiv_kwh" readOnly="readonly" placeholder='0' />
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