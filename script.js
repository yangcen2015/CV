(function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    var name = String(fd.get("name") || "").trim();
    var email = String(fd.get("email") || "").trim();
    var subject = String(fd.get("subject") || "").trim();
    var message = String(fd.get("message") || "").trim();
    var to = "yangcen2015@163.com";

    if (!name || !email || !subject || !message) {
      form.reportValidity();
      return;
    }

    var body =
      "发件人：" +
      name +
      "\n回复邮箱：" +
      email +
      "\n\n" +
      message;
    var mailto =
      "mailto:" +
      encodeURIComponent(to) +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailto;
  });
})();
