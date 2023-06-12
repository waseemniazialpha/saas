let main = document.getElementById("section-3-bottom");
let col = "";
for (let i = 0; i < 4; i++) {
    col += `                <div class="col">
    <h3>Amazing tool! Saved me months</h3>
    <p>This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.</p>
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