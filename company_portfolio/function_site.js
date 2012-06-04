$(document).ready(function(){
		
		//BOTTONI
		$('input:button').button();
		$('.dialog-message' ).dialog({ autoOpen: false, modal: true, height: 230, width: 400 });
		
		$(function() {
			invia_messaggio = function()
			{
				error=0;
				
				nome_utente=$("#nome_messaggio").val();
				email=$("#email_messaggio").val();
				c_email=$("#c_email_messaggio").val();
				testo_messaggio=$("#testo_messaggio").val();
				
				if ((nome_utente.length!=0)&&(email.length!=0)&&(c_email.length!=0)&&(testo_messaggio.length!=0))
				{
					
					if(email==c_email)
					{
						//CAMPI COMPILATI E EMAIL UGUALI
						$.ajax({
							type: "POST",
							data: {nome : nome_utente, email : email, testo: testo_messaggio},
							url: "./actions/action.send_message.php",
							success: function(risposta)
							{
								if(risposta==1)
								{
									$("#nome_messaggio").val('');
									$("#email_messaggio").val('');
									$("#c_email_messaggio").val('');
									$("#testo_messaggio").val('');
									
								}else{
									error=3;	
								}
							},
							async:false
						});	
						
					}else{
						error=2;
					}
				}else{
					error=1;	
				}

				switch(error)
				{
					case 0:
					$("#text_dialog").html("Grazie per averci contattato, il messaggio è stato inviato correttamente. Risponderemo all'indirizzo email indicato il prima possibile.<br/><br/><b>Lo Staff</b>");
					break;
					case 1:
					$("#text_dialog").html("<font color='#ce000c'>Attenzione, non sono stati compilati tutti i campi!</font>");
					break;
					case 2:
					$("#text_dialog").html("<font color='#ce000c'>Attenzione, le email inserite non corrispondono!</font>");
					break;
					case 3:
					$("#text_dialog").html("<font color='#ce000c'>Si è verificato un'errore durante l'invio del messaggio, riprovare più tardi grazie.</font>");
					break;
				}				
				
				$( "#dialog-message-contattaci" ).dialog({
					autoOpen: true,
					modal: true,
					width: 400,
					buttons: 
						{
							'Ok': function()
							{	
								$( this ).dialog( "close" );
							}			
						}
					});
			}
		});
});
	
	