// Synthetic training fixture: all personal details and identifiers are fictional.
const user = {
    id: 2005,
    username: "pratik_rajpure",
    firstName: "Pratik",
    middleName: null,
    lastName: "Rajpure",
    fullName: "Pratik Rajpure",
    age: 27,
    dateOfBirth: "1999-03-14",
    gender: "Male",
    email: "pratik.rajpure@example.com",
    alternateEmail: "pratik.work@example.com",
    phone: "+91-91234-56789",
    isActive: true,
    isEmailVerified: true,
    profilePicture: "https://example.com/images/pratik.jpg",

    address: {
        houseNumber: "17A",
        street: "FC Road",
        landmark: "Near Deccan Gymkhana",
        city: "Pune",
        state: "Maharashtra",
        postalCode: "411004",
        country: "India",
        coordinates: {
            latitude: 18.5204,
            longitude: 73.8567,
        },
    },

    permanentAddress: {
        village: "Shirwal",
        district: "Satara",
        state: "Maharashtra",
        postalCode: "412801",
        country: "India",
    },

    languages: ["English", "Hindi", "Marathi"],
    hobbies: ["Cricket", "Coding", "Trekking", "Gaming"],
    skills: [
        "JavaScript",
        "TypeScript",
        "Playwright",
        "API Testing",
        "Git",
    ],

    education: [
        {
            degree: "Bachelor of Engineering",
            specialization: "Information Technology",
            institution: "Pune Institute of Technology",
            graduationYear: 2020,
            grade: "8.7 CGPA",
        },
        {
            degree: "Post Graduate Diploma",
            specialization: "Software Testing",
            institution: "National Institute of Technology",
            graduationYear: 2021,
            grade: "Distinction",
        },
    ],

    employment: {
        company: "BSS Express Pvt. Ltd.",
        jobTitle: "QA Automation Engineer",
        department: "Quality Engineering",
        employeeId: "EMP-3092",
        employmentType: "Full-time",
        joiningDate: "2022-02-14",
        annualSalary: 900000,
        currency: "INR",
        isRemote: false,
        officeDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        manager: {
            name: "Rohan Deshmukh",
            email: "rohan.deshmukh@example.com",
        },
    },

    workExperience: [
        {
            company: "CodeCraft Solutions",
            role: "QA Intern",
            from: 2020,
            to: 2021,
        },
        {
            company: "NimbusTech",
            role: "Junior QA Engineer",
            from: 2021,
            to: 2022,
        },
    ],

    family: {
        maritalStatus: "Single",
        spouse: null,
        children: [],
        emergencyContact: {
            name: "Sunil Rajpure",
            relationship: "Father",
            phone: "+91-98765-11223",
        },
    },

    socialMedia: {
        linkedIn: "https://example.com/profiles/pratik-rajpure",
        github: "https://example.com/profiles/pratik-rajpure",
        twitter: "https://example.com/profiles/pratik-rajpure",
    },

    preferences: {
        theme: "dark",
        language: "English",
        timezone: "Asia/Kolkata",
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        favoriteColors: ["Blue", "Orange", "Black"],
    },

    bankAccounts: [
        {
            bankName: "Example Bank",
            accountType: "Savings",
            accountNumber: "XXXX-XXXX-7734",
            isPrimary: true,
        },
    ],

    documents: {
        panCard: "PQXRT5678K",
        passportNumber: "P9876543",
        drivingLicense: "MH12-2019-7654321",
    },

    loginHistory: [
        { date: "2026-08-12T09:15:00Z", device: "MacBook Pro", success: true },
        { date: "2026-08-11T18:20:00Z", device: "iPhone", success: true },
    ],

    createdAt: "2025-02-14T10:00:00Z",
    updatedAt: "2026-08-12T09:15:00Z",
    lastLoginAt: "2026-08-12T09:15:00Z",

    getIntroduction() {
        return `Hi, I am ${this.fullName}, a ${this.employment.jobTitle} from ${this.address.city}.`;
    },

    getFullAddress() {
        return `${this.address.houseNumber}, ${this.address.street}, ${this.address.city}, ${this.address.state} - ${this.address.postalCode}`;
    },
};

console.log(user);
console.log(user.getIntroduction());
console.log(user.getFullAddress());
