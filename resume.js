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

console.log(JSON.stringify(resumeData, null, 2));
