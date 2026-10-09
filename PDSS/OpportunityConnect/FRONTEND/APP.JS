// ============================================
// OPPORTUNITYCONNECT - FINAL APP.JS
// ============================================


// ============================================
// OPPORTUNITIES DATA
// ============================================

const opportunities = [

    {
        id: 1,
        title: "AI / ML Internship",
        organization: "TechNova",
        category: "Internship",
        skills: ["python", "ai", "machine learning"],
        location: "Remote",
        deadline: "18 Oct 2026",
        description:
            "Work on practical AI and machine learning projects."
    },

    {
        id: 2,
        title: "Web Development Internship",
        organization: "CodeWorks",
        category: "Internship",
        skills: ["html", "css", "javascript"],
        location: "Bangalore",
        deadline: "22 Oct 2026",
        description:
            "Build modern websites and web applications."
    },

    {
        id: 3,
        title: "National Innovation Challenge",
        organization: "Innovation Hub",
        category: "Competition",
        skills: ["python", "innovation", "web development"],
        location: "India",
        deadline: "25 Oct 2026",
        description:
            "Present innovative solutions to real-world problems."
    },

    {
        id: 4,
        title: "Merit Scholarship",
        organization: "Student Foundation",
        category: "Scholarship",
        skills: ["academic", "academic excellence"],
        location: "India",
        deadline: "5 Nov 2026",
        description:
            "Financial support for eligible college students."
    },

    {
        id: 5,
        title: "AWS Cloud Certification",
        organization: "Cloud Academy",
        category: "Certification",
        skills: ["aws", "cloud", "technology"],
        location: "Online",
        deadline: "12 Nov 2026",
        description:
            "Learn cloud fundamentals and earn a certification."
    },
    {
    id: 6,
    title: "Data Science Internship",
    company: "DataMind",
    category: "Internship",
    skills: ["python", "sql", "data science"],
    location: "Remote",
    deadline: "20 Oct 2026"
},
{
    id: 7,
    title: "Cybersecurity Internship",
    company: "SecureTech",
    category: "Internship",
    skills: ["networking", "security", "python"],
    location: "Bangalore",
    deadline: "24 Oct 2026"
},
{
    id: 8,
    title: "National Hackathon 2026",
    company: "Innovation Hub",
    category: "Competition",
    skills: ["coding", "problem solving", "innovation"],
    location: "India",
    deadline: "28 Oct 2026"
},
{
    id: 9,
    title: "Women in Technology Scholarship",
    company: "Future Scholars",
    category: "Scholarship",
    skills: ["academic", "technology", "computer science"],
    location: "India",
    deadline: "5 Nov 2026"
},
{
    id: 10,
    title: "Python Programming Certification",
    company: "LearnTech",
    category: "Certification",
    skills: ["python", "programming", "coding"],
    location: "Online",
    deadline: "10 Nov 2026"
},
{
    id: 11,
    title: "Frontend Developer Internship",
    company: "WebSpark",
    category: "Internship",
    skills: ["html", "css", "javascript"],
    location: "Remote",
    deadline: "12 Nov 2026"
},
{
    id: 12,
    title: "Cloud Computing Internship",
    company: "CloudBridge",
    category: "Internship",
    skills: ["aws", "cloud", "linux"],
    location: "Hyderabad",
    deadline: "15 Nov 2026"
},
{
    id: 13,
    title: "Student Project Innovation Challenge",
    company: "Future Innovators",
    category: "Competition",
    skills: ["project", "innovation", "technology"],
    location: "India",
    deadline: "20 Nov 2026"
}
    

];


// ============================================
// LOAD SAVED DATA
// ============================================

let profile = null;

let saved = JSON.parse(
    localStorage.getItem("savedOpportunities") || "[]"
);

let applied = JSON.parse(
    localStorage.getItem("appliedOpportunities") || "[]"
);


// ============================================
// LOAD PROFILE FROM LOCAL STORAGE
// ============================================

const storedProfile =
    localStorage.getItem("opportunityProfile");

if (storedProfile) {

    try {

        profile = JSON.parse(storedProfile);

    } catch (error) {

        profile = null;

    }

}


// ============================================
// OPEN PROFILE MODAL
// ============================================

function openModal() {

    const modal =
        document.getElementById("profileModal");

    if (!modal) return;

    modal.classList.add("show");


    // Load existing profile into form

    if (profile) {

        document.getElementById("name").value =
            profile.name || "";

        document.getElementById("email").value =
            profile.email || "";

        document.getElementById("branch").value =
            profile.branch || "Computer Science";

        document.getElementById("year").value =
            profile.year || "3rd Year";

        document.getElementById("skills").value =
            profile.skills || "";

        document.getElementById("interests").value =
            profile.interests || "";

    }

}


// ============================================
// CLOSE PROFILE MODAL
// ============================================

function closeModal() {

    const modal =
        document.getElementById("profileModal");

    if (!modal) return;

    modal.classList.remove("show");

}


// ============================================
// CREATE / UPDATE PROFILE
// ============================================

function saveProfile() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const branch =
        document.getElementById("branch").value;

    const year =
        document.getElementById("year").value;

    const skills =
        document.getElementById("skills").value.trim();

    const interests =
        document.getElementById("interests").value.trim();


    // Validation

    if (name === "" || email === "") {

        alert(
            "Please enter your name and email."
        );

        return;

    }


    // Create profile

    profile = {

        name: name,

        email: email,

        branch: branch,

        year: year,

        skills: skills,

        interests: interests

    };


    // Save profile

    localStorage.setItem(
        "opportunityProfile",
        JSON.stringify(profile)
    );


    // Update profile section

    updateProfileSection();


    // Refresh opportunity matching

    renderOpportunities();


    // Close modal

    closeModal();


    // Show success message

    showToast(
        "Profile created successfully!"
    );

}


// ============================================
// UPDATE MY PROFILE SECTION
// ============================================

function updateProfileSection() {

    if (!profile) return;


    const name =
        document.getElementById("profileName");

    const email =
        document.getElementById("profileEmail");

    const branch =
        document.getElementById("profileBranch");

    const year =
        document.getElementById("profileYear");

    const skills =
        document.getElementById("profileSkills");

    const interests =
        document.getElementById("profileInterests");


    if (name) {

        name.textContent =
            profile.name || "Your Name";

    }


    if (email) {

        email.textContent =
            profile.email || "your@email.com";

    }


    if (branch) {

        branch.textContent =
            profile.branch || "Computer Science";

    }


    if (year) {

        year.textContent =
            profile.year || "3rd Year";

    }


    if (skills) {

        skills.textContent =
            profile.skills || "Not added yet";

    }


    if (interests) {

        interests.textContent =
            profile.interests || "Not added yet";

    }

}


// ============================================
// CALCULATE MATCH PERCENTAGE
// ============================================

function calculateMatch(opportunity) {

    // No profile yet

    if (!profile) {

        return 70;

    }


    const studentData = (

        (profile.skills || "") +
        " " +
        (profile.interests || "") +
        " " +
        (profile.branch || "") +
        " " +
        (profile.year || "")

    ).toLowerCase();


    let matches = 0;


    opportunity.skills.forEach(
        function(skill) {

            if (
                studentData.includes(
                    skill.toLowerCase()
                )
            ) {

                matches++;

            }

        }
    );


    // Base score

    let score = 60;


    // Add points for matching skills

    score += matches * 10;


    // Maximum 99%

    return Math.min(score, 99);

}


// ============================================
// RENDER OPPORTUNITIES
// ============================================

function renderOpportunities() {

    const grid =
        document.getElementById(
            "opportunityGrid"
        );


    if (!grid) return;


    const searchElement =
        document.getElementById("search");

    const categoryElement =
        document.getElementById("category");


    const search =
        searchElement
            ? searchElement.value.toLowerCase().trim()
            : "";


    const category =
        categoryElement
            ? categoryElement.value
            : "All";


    // Filter opportunities

    const filtered =
        opportunities.filter(
            function(opportunity) {


                const searchableText = (

                    opportunity.title +
                    " " +
                    opportunity.organization +
                    " " +
                    opportunity.category +
                    " " +
                    opportunity.skills.join(" ") +
                    " " +
                    opportunity.location

                ).toLowerCase();


                const matchesSearch =
                    searchableText.includes(search);


                const matchesCategory =
                    category === "All" ||
                    opportunity.category === category;


                return (
                    matchesSearch &&
                    matchesCategory
                );

            }
        );


    // Clear grid

    grid.innerHTML = "";


    // No results

    if (filtered.length === 0) {

        grid.innerHTML = `

            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 50px;
                color: #756b70;
            ">

                <h3>No opportunities found</h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    // Create cards

    filtered.forEach(
        function(opportunity) {


            const match =
                calculateMatch(opportunity);


            const isSaved =
                saved.includes(opportunity.id);


            const isApplied =
                applied.includes(opportunity.id);


            const card =
                document.createElement("div");


            card.className =
                "op-card";


            card.innerHTML = `

                <span class="badge">

                    ${opportunity.category}

                </span>


                <h3>

                    ${opportunity.title}

                </h3>


                <p>

                    <strong>
                        ${opportunity.organization}
                    </strong>

                    • ${opportunity.location}

                </p>


                <p>

                    ${opportunity.description}

                </p>


                <div class="match">

                    ${match}% Match

                </div>


                <p>

                    Deadline:

                    <strong>
                        ${opportunity.deadline}
                    </strong>

                </p>


                <br>


                <button

                    class="small-btn"

                    onclick="
                        applyOpportunity(
                            ${opportunity.id}
                        )
                    "

                >

                    ${isApplied ? "Applied ✓" : "Apply"}

                </button>


                <button

                    class="small-btn alt"

                    onclick="
                        saveOpportunity(
                            ${opportunity.id}
                        )
                    "

                >

                    ${isSaved ? "Saved ✓" : "Save"}

                </button>

            `;


            grid.appendChild(card);

        }
    );

}


// ============================================
// SAVE OPPORTUNITY
// ============================================

function saveOpportunity(id) {

    const opportunity =
        opportunities.find(
            function(item) {

                return item.id === id;

            }
        );


    if (!opportunity) return;


    if (!saved.includes(id)) {

        saved.push(id);


        localStorage.setItem(
            "savedOpportunities",
            JSON.stringify(saved)
        );


        showToast(
            opportunity.title +
            " saved successfully!"
        );


    } else {

        showToast(
            "This opportunity is already saved."
        );

    }


    renderOpportunities();

}


// ============================================
// APPLY FOR OPPORTUNITY
// ============================================

function applyOpportunity(id) {

    const opportunity =
        opportunities.find(
            function(item) {

                return item.id === id;

            }
        );


    if (!opportunity) return;


    // Check profile first

    if (!profile) {

        showToast(
            "Please create your profile first."
        );


        setTimeout(
            function() {

                openModal();

            },
            800
        );


        return;

    }


    if (!applied.includes(id)) {

        applied.push(id);


        localStorage.setItem(
            "appliedOpportunities",
            JSON.stringify(applied)
        );


        showToast(
            "Application started for " +
            opportunity.title
        );


    } else {

        showToast(
            "You have already applied for this opportunity."
        );

    }


    renderOpportunities();

}


// ============================================
// TOAST MESSAGE
// ============================================

function showToast(message) {

    const toast =
        document.getElementById("toast");


    if (!toast) {

        alert(message);

        return;

    }


    toast.textContent =
        message;


    toast.classList.add("show");


    setTimeout(
        function() {

            toast.classList.remove("show");

        },
        2500
    );

}


// ============================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ============================================

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("profileModal");


        if (
            modal &&
            event.target === modal
        ) {

            closeModal();

        }

    }
);


// ============================================
// START APPLICATION
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateProfileSection();

        renderOpportunities();

        updateDashboard();

    }
);
function updateDashboard() {

    const total =
        document.getElementById("totalOpportunities");

    const savedCount =
        document.getElementById("savedCount");

    const appliedCount =
        document.getElementById("appliedCount");

    const bestMatch =
        document.getElementById("bestMatch");


    if (total) {

        total.textContent =
            opportunities.length;

    }


    if (savedCount) {

        savedCount.textContent =
            saved.length;

    }


    if (appliedCount) {

        appliedCount.textContent =
            applied.length;

    }


    if (bestMatch) {

        let highest = 0;

        opportunities.forEach(function(opportunity) {

            const match =
                calculateMatch(opportunity);

            if (match > highest) {

                highest = match;

            }

        });

        bestMatch.textContent =
            highest + "%";

    }

}