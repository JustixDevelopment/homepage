<?php
require 'env.php';
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['name']) && isset($_POST['subject']) && isset($_POST['message'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.example.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'user@example.com';
        $mail->Password   = 'secret';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // recipients
        $mail->setFrom($mailSender, $mailSenderName);
        $mail->addAddress($mailReceiver, $mailReceiverName);

        // content
        $mail->isHTML(true);
        $mail->Subject    = $subject;
        $mail->Body       = "<h1>New message from contact form</h1><p><b>Name</b>: <em>$name</em><br /><b>Subject</b>: <em>$subject</em><br /><b>Message</b>:<br /><em>$message</em></p>";
        $mail->AltBody    = "New message from contact form:\n\nName: $name\nSubject: $subject\nMessage:\n$message";

        $mail->send();
    } catch (Exception $ex) {
        echo "Message could not be sent: {$mail->ErrorInfo}";
    }
}