document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        // Get user input values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const contact = (document.getElementById("contact") as HTMLInputElement).value;
        const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
        const company = (document.getElementById("company") as HTMLInputElement).value;
        const duration = (document.getElementById("duration") as HTMLInputElement).value;
        const degree = (document.getElementById("degree") as HTMLInputElement).value;
        const university = (document.getElementById("university") as HTMLInputElement).value;
        const gradYear = (document.getElementById("gradYear") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").join(", ");

        // Populate resume
        document.getElementById("resumeName")!.innerText = name;
        document.getElementById("resumeContact")!.innerText = `Email: ${email} | Contact: ${contact}`;
        document.getElementById("resumeJobTitle")!.innerText = jobTitle;
        document.getElementById("resumeCompany")!.innerText = company;
        document.getElementById("resumeDuration")!.innerText = duration;
        document.getElementById("resumeDegree")!.innerText = degree;
        document.getElementById("resumeUniversity")!.innerText = university;
        document.getElementById("resumeGradYear")!.innerText = gradYear;
        document.getElementById("resumeSkills")!.innerText = skills;

        // Clear form fields
        form.reset();
    });
});
