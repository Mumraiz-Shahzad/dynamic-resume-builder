document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        // Get user input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contact").value;
        var jobTitle = document.getElementById("jobTitle").value;
        var company = document.getElementById("company").value;
        var jobDescription = document.getElementById("jobDescription").value.split(",").join(", ");
        var duration = document.getElementById("duration").value;
        var degree = document.getElementById("degree").value;
        var university = document.getElementById("university").value;
        var gradYear = document.getElementById("gradYear").value;
        var skills = document.getElementById("skills").value.split(",").join(", ");

        // Populate resume
        document.getElementById("resumeName").innerText = name;
        document.getElementById("resumeContact").innerText = "Email: " + email + " | Contact: " + contact;
        document.getElementById("resumeJobTitle").innerText = jobTitle;
        document.getElementById("resumeCompany").innerText = company;
        document.getElementById("resumeJobDescription").innerText = jobDescription;
        document.getElementById("resumeDuration").innerText = duration;
        document.getElementById("resumeDegree").innerText = degree;
        document.getElementById("resumeUniversity").innerText = university;
        document.getElementById("resumeGradYear").innerText = gradYear;
        document.getElementById("resumeSkills").innerText = skills;

        // Clear form fields
        form.reset();
    });

    // Print button functionality
    document.getElementById("printButton").addEventListener("click", function () {
        // Hide the form
        form.style.display = "none";

        // Print the resume
        window.print();

        // Show the form again after printing
        form.style.display = "block";
    });
});





