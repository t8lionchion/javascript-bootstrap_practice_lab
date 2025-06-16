# async_await_render_production

這是一個 JavaScript async 練習，目標是學會如何使用 `<template>`且需要再裡面添加變數 搭配非同步去動態產生多個 DOM 元素。

---

## 🎯 練習目標

利用 fetch 取得 JSON 資料，並用模板字串動態渲染商品卡片。


---
## 困難點
模板字串不能使用<template>直接完成，需要再裡面添加變數，所以需要寫成
function x({name,img,price.desc}){
    return `
        <div>
            <span>${name}</span>
            <span>${img}</span>
            <span>${price}</span>
            <span>${desc}</span>
        </div>
    `;
}


---
## 🔧 使用技術

- **HTML5**  
  利用 `<div>`、Bootstrap 的排版類別（如 `.row`, `.col-lg-3`）與結構化語意標籤建立商品卡片的框架。

- **CSS / Bootstrap 5**  
  使用 Bootstrap 預設的響應式格線系統與樣式類別，快速完成跨裝置排版與按鈕、文字樣式。

- **JavaScript (ES6+)**  
  - **模板字串（Template literals）**：用來組成動態的 HTML 字串。  
  - **物件解構賦值**：`function getProductTemplate({productimg, productname, productdesc, productprice})`  
  - **非同步函式與 `async/await`**：取得遠端 JSON 資料。  
  - **`fetch` API**：呼叫本地端或遠端 API，取得 JSON 商品資料。  
  - **錯誤處理 (`try/catch`)**：捕捉並提示網路或伺服器錯誤。  
  - **DOM 操作**：用 `innerHTML` 將組合好的 HTML 字串插入頁面。  

- **JSON**  
  使用結構化的商品資料格式（`product.json`）進行資料交換與渲染。

---



---
##  反思
滿喜歡ES6的template建議寫法，對dom抓到的是字串還是html，常常容易搞錯，尤其是在程式碼變複雜的時候，我就發生過console.log()有抓到template，但因為是字串而不是html而直接appendChild導致抱錯，未來會多加小心。


---


