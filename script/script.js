document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('[data-type]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            buttons.forEach(btn => btn.classList.remove('btn-portfolio'));
            button.classList.add('btn-portfolio');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-type') === filter) {
                    card.classList.remove('portfolio-hidden');
                } else {
                    card.classList.add('portfolio-hidden');
                }
            });
        });
    });
});
const infoContent = {
    supportengi: {
        title: "Healthcare PACS Support Engineer",
        company: "Tata Consultancy Services - Letterkenny, Ireland",
        duration: "Nov 2021 - Feb 2024",
        overview: "Acted as a first line of contact to effectively log in and treating issues for France & BeNeLux hospitals with a General Electric Healthcare's PACS or Radiology/Cardiology systems.",
        responsibilities: ["Managed/Maintained PACS issues for normal hours & oncall hours.", "Acted as a trainer and quality reviewer for new and existing colleagues.", "Assisted senior engineers in maintaining ACID compliance on databases.", "Designed andd implemented a knowledge base system for swift resolution of known issues", "Used Python, Shell and SQL to create scripts for improving resolution time and efficiency."],
        achievement: ["Successfully reduced the number of open tickets by more than 95%, surpassing established metrics.","Achieved a 25% resolution rate for high-priority cases within one year without the need for escalation. "], 
        techused: ["Linux/Windows/Network and Databases (ASE/MSSQL) Administration","Radiology/Hospitals Workflow."],
      },

    apprentice: {
        title: "Apprentice - Administrator",
        company: "Montpellier Méditerranée Métropole - Montpellier, France",
        duration: "Jan 2018 - Dec 2019",
        overview: "Helped in the day to day task of maintaining and handling servers.",
        responsibilities: ["Implemented Ansible automation for recurrent issues on systems/databases, saving hours of proactives works each days.",  "Help by automatising integration and upgrades", "Be a support"],
        achievement: ["Improved integration of new servers", 
            "Saved 35% of time by automating upgrades and maintenance time of server"
        ],
        techused: ["Linux (Ubuntu/Debian/Red Hat)", "Supervision", "Databases (PostgreSQL/MySQL)", "Ansible", "Python"],

    },
    intern: {
      title: "Internship",
      company: "ICube Laboratory - Strasbourg, France",
      duration: "2020 - 2020",
      overview: "Developing a python library to handle Whole Slide Imaging process histopathologic images",
      responsibilities: ["Fetch the data", "Process the mask", "Output processed mask and image"],
      achievement: ["Processed WSI under a few seconds"],
      techused: ["Python", "OpenCV"],

    }
  };

  function updateInfo(role) {
    const card = document.getElementById("infoCard");
    const content = infoContent[role];
  
    const responsibilitiesHTML = content.responsibilities.map(item => `<li>${item}</li>`).join('');
    const achievementHTML = content.achievement.map(item => `<li>${item}</li>`).join('');
    const techsHTML = content.techused.map(item => `<li>${item}</li>`).join('');
    card.innerHTML = `
      <h4 style="color: #4fb1c2;">${content.title}</h4> <!-- Softer Teal Blue for title -->
      <p style="color: #e0e0e0;">${content.overview}</p> <!-- Soft Gray for text -->
      <div style="display: flex; justify-content: space-between; align-items: center; color: #e0e0e0;">
        <p><strong>Company:</strong> ${content.company}</p>
        <p style="text-align: right;"><strong>Duration:</strong> ${content.duration}</p>
      </div>   
      <p style="color: #e0e0e0;"><strong>Responsibilities:</strong></p>
      <ul style="color: #e0e0e0;">${responsibilitiesHTML}</ul>
      <p style="color: #e0e0e0;"><strong>Achievements:</strong></p>
      <ul style="color: #e0e0e0;">${achievementHTML}</ul>
      <p style="color: #e0e0e0;"><strong>Tech used:</strong></p>
      <ul style="color: #e0e0e0;">${techsHTML}</ul>
    `;
  }
  

  function showPopup(role) {
    const popup = document.getElementById("infoCardPopup");
    updateInfo(role); 
    popup.style.display = "block"; 
  }
  
  function closePopup() {
    const popup = document.getElementById("infoCardPopup");
    popup.style.display = "none"; 
  }


  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const mailPopup = new bootstrap.Modal(document.getElementById('mailPopup'));
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); 
      mailPopup.show();  
      form.reset();     
    });
  });
  
  window.onload = function() {
    updateInfo('supportengi'); 
};

function showModal() {
    const modal = document.getElementById('cvModal');
    modal.style.display = 'flex'; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('cvModal');
    modal.style.display = 'none'; // Hide the modal
}

