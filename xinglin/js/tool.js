/*
津南杏林健康科普站通用工具脚本
这个文件相当于 C++ 里的公共函数文件：页面按钮调用这里的函数。
*/
const MIN_FONT_SIZE = 16;
const MAX_FONT_SIZE = 24;
const DEFAULT_FONT_SIZE = 18;

function setFontSize(size) {
    const safeSize = Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, size));
    document.body.style.fontSize = safeSize + "px";
    localStorage.setItem("xinglinFontSize", String(safeSize));
}

function biggerFont() {
    const size = parseInt(getComputedStyle(document.body).fontSize, 10) || DEFAULT_FONT_SIZE;
    setFontSize(size + 2);
}

function smallerFont() {
    const size = parseInt(getComputedStyle(document.body).fontSize, 10) || DEFAULT_FONT_SIZE;
    setFontSize(size - 2);
}

function toggleDark() {
    document.body.classList.toggle("dark");
    localStorage.setItem("xinglinDarkMode", document.body.classList.contains("dark") ? "1" : "0");
}

function backTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    const savedSize = parseInt(localStorage.getItem("xinglinFontSize"), 10);
    if (!Number.isNaN(savedSize)) {
        setFontSize(savedSize);
    }

    if (localStorage.getItem("xinglinDarkMode") === "1") {
        document.body.classList.add("dark");
    }
});
