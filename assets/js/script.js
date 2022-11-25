

// menu-btn-PC
let sidebar = document.querySelector('.sidebar');

document.querySelector('#menu-btn').onclick = () => {
    sidebar.classList.toggle('active');
}
document.querySelector('#mobile-btn').onclick = () => {
    sidebar.classList.toggle('active');
}
document.querySelector("#close-btn").onclick = () =>{
    sidebar.classList.remove('active');
}