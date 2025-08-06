function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!name.trim() || !message.trim()) {
    alert('Veuillez renseigner votre nom et écrire votre message');
    return;
  }

  if (!email.trim() || !emailRegex.test(email)) {
    alert('Veuillez renseigné un email valide s\'il vous plaît');
    return;
  }


  const body = `Nom: ${name} \n E-mail: ${email} \n Message: ${message}`;


  Email.send({
    SecureToken: "Votre_Token(smtps.js .com)",
    To: 'Votre_addresse_mail',
    From: 'Votre_addresse_mail',
    Subject: "Nouvelle demande depuis le formulaire de contact",
    Body: body,
  }).then(
    message => {
      if (message === 'OK') {
        Swal.fire({
          title: "Bien reçu!",
          text: "Votre message à bien été envoyé!",
          icon: "success"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops... désolé",
          text: "Y'a eu un petit problème! BIP BIP BOP",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    })
}

// Menu hamburger simple
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script chargé !');
    
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    console.log('Hamburger:', hamburger);
    console.log('Navbar:', navbar);
    
    if (hamburger && navbar) {
        console.log('Éléments trouvés, ajout des événements...');
        
        // Gérer le clic sur le hamburger
        hamburger.addEventListener('click', function() {
            console.log('Hamburger cliqué !');
            hamburger.classList.toggle('active');
            navbar.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique sur un lien
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('Lien cliqué, fermeture du menu');
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
        
        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navbar.contains(event.target)) {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
        
        console.log('Événements ajoutés avec succès !');
    } else {
        console.error('Éléments hamburger ou navbar non trouvés !');
    }
});
