AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rugbyduck36@gmail.com",
    Password: "0B1563AFF95021A4E473084C0F38CC6A0DC3",
    To: "mhasnain753@gmail.com",
    From: "rugbyduck36@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br/>Email: " +
      document.getElementById("email").value +
      "<br/>Subject: " +
      document.getElementById("subject").value +
      "<br/>Message: " +
      document.getElementById("message").value +
      "<br/>",
  }).then((message = "Message sent successfully") => alert(message));
}
