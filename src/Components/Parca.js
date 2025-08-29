//! HOOKS
//! REACT useState
//! REACT useEffect
import { useState, useEffect } from "react";
import './Parca.css';

const Parca = () => {
    const [counter, setCounter] = useState(0);
    // let [counter, setCounter] = useState(0);
    //* sayfada durumsal yapılar ve event listener, js değişimleri, değişkenler vg. bir çok işlem içinüst bir çatıdır.
    
    useEffect(() => {
        //! sayfa yüklendiğinde yapılması gereken işlemleri belirtir.
        //? counter = 500; direkt olarak tanımlama yapılamaz kuraldır.
        setCounter(500); //! sayfa yüklendiğinde sürekli 500 olarak gelicektir
    }, [
        // counter,
        //! dependency(bağlılık)
    ]); //! [] ile bağlılık kaldırılır ve değişiklik yapılmasına olanak sağlanır.
    //* sayfada her bir değişikliği izlemek ve ona göre davranış belirlemek istediğimde useEffect kullanılır.

    return (
        <div className="sayac">
            <button
                onClick={() => {
                    // alert('+ clicked.')
                    setCounter((prevCount) => prevCount + 1);
                }}
            > + </button>
            {/* <div> 0 </div> */}
            <div> {counter} </div>
            <button
                onClick={() => {
                    // alert("- clicked");
                    setCounter((prevCount) => prevCount - 1);
                }}
            > - </button>
        </div>
    )
};

export default Parca;
