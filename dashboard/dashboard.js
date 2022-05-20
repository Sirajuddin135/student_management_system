let details = JSON.parse(localStorage.getItem("studentDetails")) || [];
let arr = JSON.parse(localStorage.getItem("trash")) || [];
let batches = JSON.parse(localStorage.getItem("batches")) || [];
let count = JSON.parse(localStorage.getItem("batchStudentsCount")) || [];

details.forEach((element, index) => {
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.src = element.image;
    image.id = "image";

    let name = document.createElement("h1");
    name.textContent = element.name;

    let course = document.createElement("h2");
    course.id = "course";
    course.textContent = element.course;

    let batch = document.createElement("p");
    batch.textContent = element.batch + " - Unit" + element.unit;

    let btn = document.createElement("button");
    btn.id = "remove";
    btn.textContent = "Remove";
    btn.addEventListener("click", function () {
        console.log(count)
        removeStudent(batches, count, index, element.batch);
    });

    card.append(image, name, course, batch, btn);

    document.getElementById("container").append(card);
});

function removeStudent(batches, count, index, str) {
    let removedDetails = details.splice(index, 1)
    let n = batches.indexOf(str);
    arr.push(removedDetails);

    localStorage.setItem("studentDetails", JSON.stringify(details));
    localStorage.setItem("trash", JSON.stringify(arr));

    if (count[n] < 2) {
        count.splice(n, 1);
        batches.splice(n, 1);
    }
    else if (count[n] > 1) {
        --count[n];
    }
    localStorage.setItem("batches", JSON.stringify(batches));
    localStorage.setItem("batchStudentsCount", JSON.stringify(count));
    window.location.reload();
}

batches.forEach((i, index) => {
    let data = i + " - " + count[index] + "\n";
    document.getElementById("dropdown-content").append(data);
});