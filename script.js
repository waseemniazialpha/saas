
let headings = [
    'Amazing tool! Saved me months',
    'Amazing tool! Saved me months 2',
    'Amazing tool! Saved me months 3',
    'Amazing tool! Saved me months 4'];

let paragraph = [
    'This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.',
    'This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful. 2',
    'This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful. 3',
    'This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful. 4'];

let main = document.getElementById("section-3-bottom");
let col = "";
for (let i = 0; i < 4; i++) {
    col += `<div class="col">
    <h3>${headings[i]}</h3>
    <p>${paragraph[i]}</p>
    <div class="info">
        <img src="images/avatar.png" alt="">
        <div class="info-text">
            <p>John Master</p>
            <p>Director,  UiFry.com</p>
        </div>
    </div>
</div>`
}
main.innerHTML = col;

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 6,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },
});
