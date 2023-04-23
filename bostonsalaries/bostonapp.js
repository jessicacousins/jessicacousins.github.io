function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = "";
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' +
      "<h2>" +
      people[i][8] +
      "</h2>" +
      "<h3>" +
      people[i][11] +
      "</h3>";
  }
  container.innerHTML = '<ul id = "data">' + html + "</ul>";
}
renderPosts(boston, document.getElementById("container"));

function renderTopSalaries(boston, container) {
  const employee = boston.data;
  const topSalaries = employee.sort((a, b) => b[11] - a[11]).slice(0, 5);
  let html = "";
  const len = topSalaries.length;
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' +
      "<h2>" +
      topSalaries[i][8] +
      "</h2>" +
      "<h3>" +
      "$" +
      topSalaries[i][11] +
      "</h3>";
  }
  container.innerHTML = '<ul id = "topSalaries">' + html + "</ul>";
}
renderTopSalaries(boston, document.getElementById("container"));

function renderTopEmployees(boston, container) {
  const employee = boston.data;
  const topEmployees = employee.filter(employee[i] >= 200000);
  const len = topEmployees.length;
  let html = "";
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' +
      "<h2>" +
      topEmployees[i][8] +
      "</h2>" +
      "<h3>" +
      topEmployees[i][11] +
      "</h3>";
  }
  container.innerHTML = '<ul id = "topEmployees">' + html + "</ul>";
}
renderTopEmployees(boston, document.getElementById("container"));
