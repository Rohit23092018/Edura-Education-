// College data
const colleges = [
    {
        name: "RV College Of Engineering",
        brochure: "https://rvce.edu.in/sites/default/files/RVCE-CoE-Brochure.pdf",
        image: "../images/RVcover.jpg",
        rating: 4.3,
        reviews: 7,
        location: "Bengaluru, Karnataka",
        type: "Private Unaided",
        rank: "#99 NIRF",
        fees: "₹68,000 - 24,00,000",
        accreditation: "AICTE",
        avgPackage: "13.1 Lacs",
        exams: "JEE Main, KCET, COMEDK UGET, CBSE 12th, Karnataka PGCET, KMAT",
        description: "RVCE Bangalore admissions are ongoing for various UG & PG programmes. The college offers 4 courses including BTech, MCA, M.Sc, and MTech.  Admission to BTech courses is offered on the basis of COMEDK, JEE Main,& KCET scores. For MTech & MCA admission, GATE scores and KMAT scores are accepted. The RVCE Bangalore fee ranges from Rs 68,500 to Rs 8,88,000 depending on the course."
    },
    {
        name: "PES University",
        brochure: "https://drive.google.com/file/d/10FuYm7uV-uS0lCYLTaWecolhaUU0fxsy/view",
        image: "../images/Pescover.jpg",
        rating: 4.6,
        reviews: 47,
        location: "Bengaluru, Karnataka",
        type: "University",
        rank: "#-49 NIRF",
        fees: "₹50,000 - 7,20,000",
        accreditation: "UGC +3",
        avgPackage: "5 Lacs",
        exams: "JEE Main,PGCET, KCET, and GATE",
        description: "PES University admissions 2025 are ongoing for various courses. The university accepts CAT, MAT, UCEED, LSAT-India, Karnataka PGCET, KCET, JEE Main and GATE for admission to its various courses. For MBA admission, CAT will be conducted on November , 2025 whereas for law admission, LSAT—India 2025 result will be declared soon. PESU Bangalore offers a total of 27 courses in various specialisations and the fee ranges from Rs 50,000 to Rs 3,60,000 annually."
    },
    {
        name: "MS Ramaiah Institute of Technology",
        brochure: "https://msrit-bucket.s3.us-west-2.amazonaws.com/Admissions/RIT+Brochure-2024.pdf",
        image: "../images/Ramaiahcover.jpg",
        rating: 4.1,
        reviews: 34,
        location: "Bengaluru, Karnataka",
        type: "Private",
        rank: "#75 NIRF",
        fees: "₹68,500 - 8,88,000",
        accreditation: "UGC +4",
        avgPackage: "7.66 Lacs",
        exams: "JEE Main,KCET,PGCET,COMEDK,KCET and GATE",
        description: "MS Ramaiah Institute of Technology applications are open for various courses for 2025 session. The institute accepts JEE Main and KCET scores. For admission to the BTech course, JEE Main application forms are open till 25th February, 2025 (up to 9:00 P.M.) and the exam will be held from April1 to 8, 2025. KCET 2025 application forms are open till 18th February, 2025 and the exam will be held on16,17 and 18th of April, 2025. IIT JAM 2025 online result will be declared on March 19, 2025 for the MSc course. For MBA admission MS Ramaiah Institute of Technology fees range from Rs 68,500 to Rs 8,88,000 per annum."
    },
    {
        name: "BMS College Of Engineering",
        brochure: "https://bmsce.ac.in/assets/img/Placement/placement_brochure.pdf",
        image: "../images/Bmscover.jpg",
        rating: 4.3,
        reviews: 74,
        location: "Bengaluru, Karnataka",
        type: "Private",
        rank: "#-49 NIRF",
        fees: "₹64,680 - 16,00,000",
        accreditation: "AICTE +2",
        avgPackage: "6 Lacs",
        exams: "JEE Main,KCET,PGCET,COMEDK,KCET and GATE",
        description: "BMSCE admission 2025 has started for UG and PG courses. The institute offers 6 courses at UG and PG levels. At the UG level, the institute offers BTech and BArch courses. At the PG level, the institute offers MBA, MCA, MArch, and MTech programmes. There are various entrance exams accepted for BMSCE admission. For BTech, admission is done through KCET/ COMEDK. Other exams accepted for admission are GATE for MTech, and CAT/ MAT for MBA. COMEDK Result 2025 will be released on May 24, 2025."
    },
    {
        name: "Dayananda Sagar Institute",
        brochure: "https://dayanandasagar.edu/dsit/images/prospectus.pdf",
        image: "../images/Dsccover.jpg",
        rating: 4.4,
        reviews: 20,
        location: "Bengaluru, Karnataka",
        type: "Private",
        rank: "",
        fees: "₹2,80,000 - 17,00,000",
        accreditation: "UGC +4",
        avgPackage: "6.5 Lacs",
        exams: "JEE Main,KCET,PGCET,COMEDK,KCET and GATE",
        description: "Dayananda Sagar College Of Engineering offers a wide range of UG and PG courses to the students. The courses are offered in a well-structured curriculum, which is prepared to make students industry ready for the future. Few of the courses offered at Dayananda Sagar College Of Engineering are B.E. / B.Tech, M.E./M.Tech, MBA/PGDM and M.Sc., among others."
    },
    {
        name: "Jain University",
        brochure: "https://set.jainuniversity.ac.in/pdf/Btech-and-Mtech-Prospectus.pdf",
        image: "../images/jaincover.jpg",
        rating: 4.3,
        reviews: 119,
        location: "Bengaluru, Karnataka",
        type: "Private",
        rank: "#95 NIRF",
        fees: "₹1,40,000 - 5,20,000",
        accreditation: "UGC +4",
        avgPackage: "19 Lacs",
        exams: "JET, CAT , GATE ,JEE MAIN",
        description: "Jain University admissions are ongoing for the year 2025 (all courses except BTech). The university offers 24 courses across UG, PG and PhD levels. The university conducts its entrance test called the JAIN Entrance Test (JET) but also accepts other entrance exam scores such as JEE Mains, KCET, GATE, etc for the admissions. The JET application form has been released for 2025. For MBA admission, the CAT exam will be considered, and the XAT exam result has been released. The Jain University fee ranges between Rs 1,00,000 to Rs 5,75,000 per annum."
    },
    {
        name: "Reva University",
        brochure: "https://www.reva.edu.in/naac2023/Extended_Profile/1.1/Brochure5.pdf",
        image: "../images/Revacover.jpeg",
        rating: 4.3,
        reviews: 44,
        location: " Bengaluru, Karnataka",
        type: "Private",
        rank: "",
        fees: "₹15,000 - 4,50,000",
        accreditation: "UGC +2",
        avgPackage: "6 Lacs",
        exams: "REVA CET, COMEDK",
        description: "Reva University admission 2025 is open for UG and PG programmes. The university offers a wide range of courses in streams like engineering, management, law, and more. Popular courses include B.Tech, MBA, LL.B., and BBA. For admission, Reva University conducts its own entrance tests, and other national-level exams like JEE, CAT, and CLAT are also accepted. The fee structure varies from course to course, typically ranging from Rs 50,000 to Rs 200,000 per year."
    },
    {
        name: "BMS Institute of Technology and Management",
        brochure: "https://bmsit.ac.in/public/assets/pdf/Final_BMSIT_Brochure_2023.pdf",
        image: "../images/BMSIT.jpg",
        rating: 4.3,
        reviews: 9,
        location: " Bengaluru, Karnataka",
        type: "Private",
        rank: "#199 NIRF",
        fees: "₹75,000 - 6,50,000",
        accreditation: "UGC +2",
        avgPackage: "8.97 Lacs",
        exams: "KCET, COMEDK, Karnataka PGCET, and GATE",
        description: "BMS Institute of Technology and Management (BMSIT) has opened admissions for its 2025 academic session, offering a range of undergraduate and postgraduate programs in engineering, management, and computer applications. Popular courses include B.E., M.Tech, MBA, and MCA. Admissions are primarily through entrance exams such as KCET, COMEDK, Karnataka PGCET, and GATE. The fee structure varies by program, with B.E. courses ranging from ₹3.9 to ₹10.5 lakh for the full duration, and postgraduate programs like M.Tech, MBA, and MCA typically ranging from ₹1.5 to ₹3 lakh."
    },
    {
        name: "CMRIT",
        brochure: "https://www.cmrit.ac.in/wp-content/uploads/2024/03/CMRIT-Flyer-High-quality-print-file_15.02.2024-1.pdf",
        image: "../images/Cmritcover.avif",
        rating: 3.7,
        reviews: 17,
        location: " Bengaluru, Karnataka",
        type: "Private Unaided",
        rank: "#-49 NIRF",
        fees: "₹54,000 - 3,34,000",
        accreditation: "UGC +5",
        avgPackage: "6.35 Lacs",
        exams: "KCET, COMEDK, Karnataka PGCET, and GATE",
        description: "CMRIT admission requires COMEDK and KCET exam scores for BTech courses. COMEDK 2024 final answer key will be released on May 21, 2024. The COMEDK 2024 results will be made online on May 24, 2024. KCET 2024 exam results for BTech admission will be released on May 20, 2024. The institute offers popular courses like BTech, MTech, MBA, etc. CMRIT course fees range from Rs 54,000 to Rs 3,34,000 per year."
    },
    {
        name: "Nitte Meenakshi Institute of Technology",
        brochure: "https://img.jagranjosh.com/images/2023/January/312023/Nitte-Meenakshi-Institute-of-Technology-NMIT-Bengaluru-Brochure.pdf",
        image: "../images/Nittecover.avif",
        rating: 4.4,
        reviews: 33,
        location: " Bengaluru, Karnataka",
        type: "Private",
        rank: "#-49 NIRF",
        fees: "₹50,000 - 7,00,000",
        accreditation: "UGC +3",
        avgPackage: "7.6 Lacs",
        exams: "KCET, COMEDK, Karnataka PGCET",
        description: "Nitte Meenakshi Institute of Technology conducts the NUCAT (Nitte University Common Admission Test) for admission to various programmes but also accepts certain entrance exams. For M.Tech admission, the GATE 2025 scores are accepted. GATE 2025 exam will be held on Feb 1, 2, 15, and 16, 2025. For MBA admission, CAT exam is scheduled on November 30, 2025. Nitte Meenakshi Institute of Technology fees for the B.Tech course range from Rs 2,00,000 to Rs 5,75,000."
    },
    // Add more colleges here with the same structure
];

// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const menuIcon = hamburger.querySelector('i');
    if (navMenu.classList.contains('active')) {
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Function to show counselling dialog
function showCounsellingDialog() {
    const dialog = document.getElementById('counsellingDialog');
    dialog.showModal();
}

// Generate college cards
function createCollegeCard(college) {
    return `
        <div class="college-card">
            <div class="card-content">
                <img src="${college.image}" alt="${college.name}" class="card-image">
                <div class="card-body">
                    <div class="card-header">
                        <h2 class="college-name">${college.name}</h2>
                        <div class="rating-container">
                            <i data-lucide="star" class="star-icon"></i>
                            <span class="rating">${college.rating}</span>
                            <span class="reviews">(${college.reviews} Reviews)</span>
                        </div>
                    </div>

                    <div class="college-info">
                        <div class="info-item">
                            <i data-lucide="map-pin" class="info-icon"></i>
                            <span class="info-text">${college.location}</span>
                        </div>
                        <div class="info-item">
                            <i data-lucide="building-2" class="info-icon"></i>
                            <span class="info-text">${college.type}</span>
                        </div>
                        <div class="info-item">
                            <i data-lucide="award" class="info-icon"></i>
                            <span class="info-text">${college.rank}</span>
                        </div>
                    </div>

                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-label">Fees</div>
                            <div class="stat-value">${college.fees}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Accreditation</div>
                            <div class="stat-value">${college.accreditation}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Avg Package</div>
                            <div class="stat-value">${college.avgPackage}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Exams</div>
                            <div class="stat-value">${college.exams}</div>
                        </div>
                    </div>

                    <p class="college-description">${college.description}</p>

                    <div class="card-actions">
                        <button class="btn btn-primary" onclick="showCounsellingDialog()">Get Free Counselling</button>
                        <a href="${college.brochure}" class="btn btn-secondary" download>Download Brochure</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render college cards
const collegeCardsContainer = document.getElementById('collegeCards');
colleges.forEach(college => {
    collegeCardsContainer.innerHTML += createCollegeCard(college);
});

// Re-initialize icons after adding cards
lucide.createIcons();