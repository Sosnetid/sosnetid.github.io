<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "flamixs.info@gmail.com";  // Ganti dengan email Anda
    $subject = "Pesan dari $name";
    $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Pesan gagal dikirim.";
    }
}
?>
