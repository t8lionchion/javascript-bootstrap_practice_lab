# Loop Event Binding with JavaScript Template

這是一個 JavaScript DOM 練習作品，目標是學會如何使用 `<template>` 搭配 `cloneNode(true)` 動態產生多個 DOM 元素，並為每一個元素綁定對應事件。

---

## 🎯 練習目標

- 使用 `<template>` 建立不可見的 HTML 模板
- 透過 `.content.cloneNode(true)` 複製模板內容
- 動態插入多個卡片至畫面中
- 為每張卡片內的按鈕綁定專屬事件（變紅色 / 還原）

---

## 🧠 為什麼不用 `forEach()`？

雖然 `forEach()` 也可以綁定事件，但此練習中選擇使用傳統 `for` 迴圈是為了：

- 同時處理三組元素陣列（按鈕1、按鈕2、段落）
- 避免寫兩次 `forEach()`，提升維護效率
- 更清楚地控制索引與邏輯順序

---

## 🔧 使用技術

| 技術項目 | 說明 |
|----------|------|
| HTML `<template>` | 製作可重複複製的 DOM 節點 |
| JavaScript DOM 操作 | 使用 `querySelectorAll`、`cloneNode()`、`appendChild()` 等操作 |
| 事件綁定 | 為每組卡片的按鈕添加 `click` 事件 |
| Bootstrap 5 | 使用卡片、按鈕、排版等元件快速設計 UI |

---
##  反思

開始習慣用consoli.log()去查看有沒有正確抓到目標元素
確保先渲染畫面再進行事件綁定，避免沒有綁定事件的問題發生。
為未來async await練習時能正確排錯且能渲染畫面而努力。

---

## 📌 預覽畫面

> ![示意圖](/js_bootstrap_practice-lab/multi-event-binding/image.png) 

---



