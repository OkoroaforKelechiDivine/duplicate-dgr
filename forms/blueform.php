<?php

$mailTo     = 'info@dgr-estate.com';

$email_title = $_POST['fullname'];
$email = $_POST['email-address'];
$email_subject = "New form Submissions";

$headers = 'From:admin@dgr-estate.com' . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$actual_link = "$_SERVER[HTTP_REFERER]";
/**

 * Set the message that will be shown on success

 */

$successMsg = 'Thank you, mail sent successfully!';



/**

 * Set the message that will be shown if not all fields are filled

 */

$fillMsg    = 'Please fill all fields!';



/**

 * Set the message that will be shown on error

 */

$errorMsg   = 'Hm.. seems there is a problem, sorry!';



/**

 * DO NOT EDIT ANYTHING BELOW THIS LINE, UNLESS YOU'RE SURE WHAT YOU'RE DOING

 */



?>

<?php

if(

    !isset($_POST['fullname']) ||
    !isset($_POST{'email-address'}) ||
    !isset($_POST['phone-number']) ||
    !isset($_POST{'property-type'}) ||
    !isset($_POST{'message'}) ||

    empty($_POST['fullname']) ||

    empty($_POST['email-address']) ||

	empty($_POST['phone-number']) ||

    empty($_POST['message']) 

   

) {

	

	if(empty($_POST['fullname']) && empty($_POST['email-address']) ) {

		$json_arr = array( "type" => "error", "msg" => $fillMsg );
        echo$json_arr;  ;		

	} else {



		$fields = "";

		if( !isset( $_POST['fullname'] ) || empty( $_POST['fullname'] ) ) {

			$fields .= "Name";

		}

		

		if( !isset( $_POST['email-address'] ) || empty( $_POST['email-address'] ) ) {

			if( $fields == "" ) {

				$fields .= "Email";

			} else {

				$fields .= ", Email";

			}

		}

		if( !isset( $_POST['phone-number'] ) || empty( $_POST['phone-number'] ) ) {

			if( $fields == "" ) {

				$fields .= "phone";

			} else {

				$fields .= ", Phone";

			}

		}

		

		if( !isset( $_POST['message'] ) || empty( $_POST['message'] ) ) {

			if( $fields == "" ) {

				$fields .= "message";

			} else {

				$fields .= ", Message";

			}

		}

		

		$json_arr = array( "type" => "error", "msg" => "Please fill ".$fields." fields!" );

		echo json_encode( $json_arr );		

	

	}



} else {



	// Validate e-mail

	if (!filter_var($_POST['email-address'], FILTER_VALIDATE_EMAIL) === false) {

		

		$msg = "Name: ".$_POST['fullname']."\r\n";

		$msg .= "Email: ".$_POST['email-address']."\r\n";

		$msg .= "Phone: ".$_POST['phone-number']."\r\n";

		$msg .= "Property Type: ".$_POST['property-type']."\r\n";		

		if( isset( $_POST['message'] ) && $_POST['message'] != '' ) { $msg .= "Message: ".$_POST['message']."\r\n"; }
		$msg .= "This message was sent from: ".$actual_link."\r\n";

		
		$success = @mail($mailTo, $email_subject, $msg, $headers);
		

		if ($success) {

			header('Location: thank-you.html');

		} else {

			$json_arr = array( "type" => "error", "msg" => $errorMsg );

			echo json_encode( $json_arr );

		}

		

	} else {

 		$json_arr = array( "type" => "error", "msg" => "Please enter valid email address!" );

		echo json_encode( $json_arr );	

	}

			exit;

}