# ⚛️ React Sayaç Uygulaması  

Bu proje, kullanıcıların sayı değerlerini artırıp azaltabileceği, başlangıç değeri belirleyebileceği ve temayı değiştirebileceği interaktif bir **Sayaç (Counter)** uygulamasıdır.  
Uygulama **React** kullanılarak geliştirilmiştir ve kullanıcı verileri **LocalStorage** üzerinde kalıcı olarak saklanır.  
Bu sayede sayfa yenilense veya tarayıcı kapatılsa bile sayaç ve tema ayarları kaybolmaz.

---

## 🚀 Özellikler

- ✅ **Artırma ve Azaltma:** Sayaç değerini butonlarla dinamik olarak değiştirme.  
- 🧮 **Başlangıç Değeri Belirleme:** Kullanıcı, istediği başlangıç değerini girip sayacı o değerden başlatabilir.  
- 🔁 **Sıfırlama:** Sayaç değerini tek tıkla sıfırlama.  
- 💾 **Kalıcı Veri Saklama:** Sayaç ve tema bilgileri tarayıcı **LocalStorage**'ında saklanır.  
- 🌓 **Tema Değiştirme (Açık/Koyu Mod):** Kullanıcılar açık ve koyu tema arasında geçiş yapabilir.  
- 🎨 **Modern Arayüz:** Responsive ve sade tasarım.  
- ⚡ **Otomatik Geri Yükleme:** Sayfa yenilendiğinde en son kullanılan sayaç değeri ve tema otomatik olarak geri yüklenir.

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Rolü |
|------------|-----------|
| **React (CRA)** | Uygulamanın temel yapısı ve component bazlı mantık. |
| **JavaScript (ES6+)** | Sayaç, tema ve localStorage işlevleri. |
| **CSS3** | Modern ve responsive arayüz tasarımı. |
| **LocalStorage API** | Sayaç ve tema bilgilerinin kalıcı olarak saklanması. |

---

## 📂 Proje Dosya Yapısı

📁 react-sayac
├── 📁 src
│ ├── 📁 Components
│ │ ├── 📄 Parca.js
│ │ └── 📄 Parca.css
│ ├── 📄 App.js
│ ├── 📄 App.css
│ └── 📄 index.js
├── 📄 package.json
├── 📄 README.md
└── 📄 .gitignore


---

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Bu projeyi klonlayın:
   ```bash
   git clone https://github.com/mhilmicicek07/react-sayac.git
Proje klasörüne geçin:


cd react-sayac
Gerekli bağımlılıkları yükleyin:


npm install
Uygulamayı başlatın:


npm start
Tarayıcınızda aşağıdaki adresi açın:
👉 http://localhost:3000

Hepsi bu kadar! 🎉
Artık sayacı artırabilir, azaltabilir, sıfırlayabilir ve temayı değiştirebilirsiniz.
Yaptığınız tüm değişiklikler tarayıcıda kalıcı olarak saklanır.

🧠 Teknik Açıklama
Parca.js, uygulamanın ana componentidir.
Burada sayaç mantığı (useState, useEffect) ile yönetilir.

LocalStorage üzerinden hem sayaç değeri hem de tema bilgisi saklanır.

Tema değişimi, data-theme attribute’u ile body üzerinde dinamik olarak uygulanır.

CSS değişkenleri (--bg-color, --text-color vb.) kullanılarak açık/koyu mod arası geçiş yumuşak şekilde yapılır.

👨‍💻 Geliştirici
Mehmet Hilmi Çiçek
💼 Full Stack Web Developer
📍 Geislingen an der Steige
💬 “Basit ama tutarlı kod, karmaşık olandan her zaman üstündür.”

🪪 Lisans
Bu proje açık kaynaklıdır.
İsteyen herkes kodu inceleyebilir, geliştirebilir veya kişisel projelerinde kullanabilir.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
