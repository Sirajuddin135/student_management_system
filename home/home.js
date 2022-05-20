function StudentDetails(name, course, unit, image, batch) {
    this.name = name;
    this.course = course;
    this.unit = unit;
    this.image = image;
    this.batch = batch;
}

let arr = JSON.parse(localStorage.getItem("studentDetails")) || [];
let arr1 = JSON.parse(localStorage.getItem("batches")) || [];
let arr2 = JSON.parse(localStorage.getItem("batchStudentsCount")) || [];

function details() {
    event.preventDefault();

    let form = document.getElementById("studentDetails");

    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.imageUrl.value;
    let batch = form.batch.value;

    let p = new StudentDetails(name, course, unit, image, batch);
    arr.push(p);

    localStorage.setItem("studentDetails", JSON.stringify(arr));

    if (arr1.includes(batch)) {
        arr2[arr1.indexOf(batch)]++;
    }
    else {
        arr1.push(batch);
        arr2.push(1);
    }

    localStorage.setItem("batches", JSON.stringify(arr1));
    localStorage.setItem("batchStudentsCount", JSON.stringify(arr2));

    window.location.reload();
}

arr1.forEach((i, index) => {
    document.getElementById("dropdown-content").append(i + " - " + arr2[index] + "\n");
});