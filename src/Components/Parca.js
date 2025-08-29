import { useState, useEffect } from "react";
import './Parca.css';

const Parca = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(""); // Kullanıcıdan alınacak başlangıç değeri
    const [isStarted, setIsStarted] = useState(false); // Sayaç başlatıldı mı?
    const [theme, setTheme] = useState("light"); // Tema durumu

    // Sayfa yüklendiğinde localStorage'dan değerleri oku
    useEffect(() => {
        const savedCounter = localStorage.getItem("counter");
        const savedTheme = localStorage.getItem("theme");

        if (savedCounter !== null) {
            setCounter(Number(savedCounter));
            setIsStarted(true);
        } else {
            setCounter(500);
            localStorage.setItem("counter", 500);
            setIsStarted(true);
        }

        if (savedTheme) {
            setTheme(savedTheme);
            document.body.setAttribute("data-theme", savedTheme);
        } else {
            document.body.setAttribute("data-theme", "light");
        }
    }, []);

    // Sayaç değiştiğinde localStorage'a kaydet
    useEffect(() => {
        if (isStarted) {
            localStorage.setItem("counter", counter);
        }
    }, [counter, isStarted]);

    // Tema değiştiğinde localStorage'a kaydet ve body'ye uygula
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    // Sayaç sıfırlama
    const resetCounter = () => {
        setCounter(0);
        localStorage.setItem("counter", 0);
    };

    // Kullanıcının girdiği başlangıç değerini uygula
    const handleStart = () => {
        if (inputValue.trim() === "" || isNaN(inputValue)) {
            alert("Lütfen geçerli bir sayı girin!");
            return;
        }
        const newValue = Number(inputValue);
        setCounter(newValue);
        localStorage.setItem("counter", newValue);
        setIsStarted(true);
        setInputValue("");
    };

    // Tema değiştirme fonksiyonu
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="sayac">
            <h2>Sayaç: {counter}</h2>

            {/* Başlangıç değeri ayarlama */}
            <div className="input-section">
                <input
                    type="number"
                    placeholder="Başlangıç değeri girin..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleStart}>Başlat</button>
            </div>

            {/* Sayaç kontrol butonları */}
            <div className="buttons">
                <button onClick={() => setCounter(prev => prev + 1)}>Artır</button>
                <button onClick={() => setCounter(prev => prev - 1)}>Azalt</button>
                <button onClick={resetCounter}>Sıfırla</button>
            </div>

            {/* Tema değiştirme */}
            <div className="theme-section">
                <p>Şu anki tema: <strong>{theme === "light" ? "Açık" : "Koyu"}</strong></p>
                <button onClick={toggleTheme}>
                    {theme === "light" ? "Koyu Mod" : "Açık Mod"}
                </button>
            </div>
        </div>
    );
};

export default Parca;
