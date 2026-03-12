const STORAGE_KEY = "nimbli_registration";

const dummyRegistrationData = {
    step1: {
        praktijknaam: "Kinepraktijk De Sprong",
        contactpersoon: {
            voornaam: "Sarah",
            achternaam: "Peeters"
        },
        land: "België",
        adres: {
            straatnaam: "Stationsstraat",
            nummer: "12"
        },
        plaats: {
            postcode: "9000",
            plaatsnaam: "Gent"
        },
        zelfdeAlsFactuuradres: false,
        factuuradres: {
            naam: "Kinepraktijk De Sprong BV",
            land: "België",
            straatnaam: "Stationsstraat",
            nummer: "12",
            postcode: "9000",
            plaatsnaam: "Gent"
        },
        overige: {
            telefoonnummer: "03 458 456 712",
            emailAlgemeen: "info@nimbli.be",
            emailFacturen: "facturen@nimbli.be",
            kvk: "",
            btw: "BE0123456789"
        }
    },

    users: [
        {
            firstName: "",
            lastName: "",
            email: "",
            role: "Beheerder"
        }
    ],

    pricing: {
        plan: "Standaard",
        usersCount: 2,
        totalIncl: 320,
        totalExcl: 264.46,
        vat: 55.54
    }
};

function seedDummyRegistrationData() {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dummyRegistrationData));
    }
}

function getRegistrationData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}

function saveRegistrationData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function resetRegistrationData() {
    localStorage.removeItem(STORAGE_KEY);
}