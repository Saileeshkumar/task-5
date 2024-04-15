const resumeData = {
  name: "Saileesh",
  dateOfBirth: "02.08.1997",
  nationality: "Indian",
  education: {
    degree: "Bachelor's in Computer Science Engineering",
    college: "Government College of Technology, Coimbatore",
    graduationYear: 2019
  },
  knownLanguages: ["English", "Tamil"],
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  experience: [
    {
      company: "Wipro",
      position: "Frontend Developer",
      duration: "2019 - 2021"
    },
    {
      company: "TCS",
      position: "Full Stack Developer",
      duration: "2021 - Present"
    }
  ]
};

// Using for loop
console.log("Using for loop:");
for (let key in resumeData) {
  console.log(key + ": " + resumeData[key]);
}

// Using for-of loop for arrays
console.log("\nUsing for-of loop:");
for (let skill of resumeData.skills) {
  console.log(skill);
}

// Using forEach method for arrays
console.log("\nUsing forEach method:");
resumeData.knownLanguages.forEach(language => console.log(language));

// Using for-of loop for nested objects
console.log("\nUsing for-of loop for nested objects:");
for (let experience of resumeData.experience) {
  for (let key in experience) {
    console.log(key + ": " + experience[key]);
  }
}
