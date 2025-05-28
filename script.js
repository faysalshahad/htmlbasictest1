function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("myForm");
  const name = form.elements["name"].value;
  const phone = form.elements["phone"].value;
  const email = form.elements["email"].value;
  const country = form.elements["country"].value;
  const state = form.elements["state"].value;
  const message = form.elements["message"].value;

  alert(
    `Form Data:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCountry: ${country}\nState: ${state}\nMessage: ${message}`
  );

  const newPage = window.open("", "_blank");
  newPage.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Submitted Data</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { color: #2c3e50; }
                .data { margin: 15px 0; }
            </style>
        </head>
        <body>
            <h1>Form Submission Received!</h1>
            <div class="data"><strong>Name:</strong> ${name}</div>
            <div class="data"><strong>Phone:</strong> ${phone}</div>
            <div class="data"><strong>Email:</strong> ${email}</div>
            <div class="data"><strong>Country:</strong> ${country}</div>
            <div class="data"><strong>State:</strong> ${state}</div>
            <div class="data"><strong>Message:</strong> ${message}</div>
        </body>
        </html>
    `);

  // Clear the form
  form.reset();
}
