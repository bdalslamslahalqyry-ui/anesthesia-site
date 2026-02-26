// =============================
// تأثير دخول الصفحة
// =============================
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "1.2s";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 200);
});


// =============================
// حركة تكبير عند النزول
// =============================
const elements = document.querySelectorAll(".book, .social");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.style.transform = "scale(1)";
            el.style.opacity = "1";
            el.style.transition = "0.8s ease";
        } else {
            el.style.transform = "scale(0.9)";
            el.style.opacity = "0.5";
        }
    });
});


// =============================
// نبض احترافي لكل الأزرار
// =============================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    setInterval(() => {
        btn.style.boxShadow = "0 0 25px rgba(255,255,255,0.6)";
        setTimeout(() => {
            btn.style.boxShadow = "none";
        }, 800);
    }, 3500);

});