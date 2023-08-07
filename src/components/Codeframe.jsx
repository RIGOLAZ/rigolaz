import React from 'react';
// import april from '../css/bg-img/april.gif'
// import { useAuthContext } from '../hooks/useAuthContext';
import CodeList from "./CodeList.json"

const CodeFrame = () => {

    // const {user} = useAuthContext()

    return (
        <>
        <div className="codepage">
    <div>
        <table>
            <caption>short codes interface client</caption>
            <thead>
                <tr>
                    <th className="tabL">Functions</th>
                    <th className="mid">Shorts codes</th>
                    <th className="tabR">Fonctions</th>
                </tr>
            </thead>
            <tbody>
                {CodeList.map((code)=>(
                    <tr>
                    <td className="right">{code.functions} </td>
                    <td className="mid">{code.codes} </td>
                    <td>{code.fonctions} </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    {/* <div className='surpriseBloc'>
        {user && <h3 className='surpriseNotif'>Une prochaine surprise bientôt</h3>}
        {user && <div className='rain'><img className='resize' src={april} alt="fun" /></div>}
        {!user && <div className='rain'><h3>Connetez-vous et découvrez votre surprise ici!</h3></div>}
        </div> */}
    </div>
    </>
    );
};

export default CodeFrame;