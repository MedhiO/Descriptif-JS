// Sélectionne les menu par leurs ID
const ConceptionDeveloppement = document.getElementById("div1");
const Formation = document.getElementById("div2");
const Jury = document.getElementById("div3");
const AuditConseil = document.getElementById("div4");
const Stage = document.getElementById("div5");

// Initialise une variable d'état
let etat = "detailscacher"; // visible par defaut

// Ajoutez un gestionnaire d'événements pour le clic sur la div conception
ConceptionDeveloppement.addEventListener("click", function() {
    if (etat === "detailscacher") {
      document.getElementById("p1").style.display="block"; // Fait disparaitre le lorem
      etat = "detailsvisible"; // Change l'état
      document.getElementById("p2","p3","p4","p5").style.display="none"
      etat = "detailscacher"; // Change l'état
    } else {
      document.getElementById("p1").style.display="none"; // Fait apparaitre le lorem
      etat = "detailscacher"; // Reviens à l'état initial
    }
  });

  Formation.addEventListener("click", function() {
    if (etat === "detailscacher") {
      document.getElementById("p2").style.display="block"; // Fait disparaitre le lorem
      etat = "detailsvisible"; // Change l'état
      document.getElementById("p1","p3","p4","p5").style.display="none"
      etat = "detailscacher"; // Change l'état
    } else {
      document.getElementById("p2").style.display="none"; // Fait apparaitre le lorem
      etat = "detailscacher"; // Reviens à l'état initial
    }
  });

  Jury.addEventListener("click", function() {
    if (etat === "detailscacher") {
      document.getElementById("p3").style.display="block"; // Fait disparaitre le lorem
      etat = "detailsvisible"; // Change l'état
      document.getElementById("p1","p2","p4","p5").style.display="none"
      etat = "detailscacher"; // Change l'état
    } else {
      document.getElementById("p3").style.display="none"; // Fait apparaitre le lorem
      etat = "detailscacher"; // Reviens à l'état initial
    }
  });

  AuditConseil.addEventListener("click", function() {
    if (etat === "detailscacher") {
      document.getElementById("p4").style.display="block"; // Fait disparaitre le lorem
      etat = "detailsvisible"; // Change l'état
      document.getElementById("p1","p2","p3","p4").style.display="none"
      etat = "detailscacher"; // Change l'état
    } else {
      document.getElementById("p4").style.display="none"; // Fait apparaitre le lorem
      etat = "detailscacher"; // Reviens à l'état initial
    }
  });

    Stage.addEventListener("click", function() {
    if (etat === "detailscacher") {
      document.getElementById("p5").style.display="block"; // Fait disparaitre le lorem
      etat = "detailsvisible"; // Change l'état
      document.getElementById("p1","p2","p3","p4").style.display="none"
      etat = "detailscacher"; // Change l'état
    } else {
      document.getElementById("p5").style.display="none"; // Fait apparaitre le lorem
      etat = "detailscacher"; // Reviens à l'état initial
    }
  });
  


