document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Username dan password yang benar
    const correctUsername = "TYO";
    const correctPassword = "1234";
    
    // Ambil data dari form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login Berhasil!";
        // Bisa lanjut ke halaman lain atau tampilkan konten khusus
    } else {
        message.style.color = "red";
        message.textContent = "Username atau password salah!";
    }
});