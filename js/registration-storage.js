const STORAGE_KEY = "nimbli_registration";

const defaultRegistrationData = {
    step1: {
        praktijknaam: "",
        contactpersoon: {
            voornaam: "",
            achternaam: ""
        },
        land: "",
        adres: {
            straatnaam: "",
            nummer: ""
        },
        plaats: {
            postcode: "",
            plaatsnaam: ""
        },
        zelfdeAlsFactuuradres: false,
        factuuradres: {
            naam: "",
            land: "",
            straatnaam: "",
            nummer: "",
            postcode: "",
            plaatsnaam: ""
        },
        overige: {
            telefoonnummer: "",
            emailAlgemeen: "",
            emailFacturen: "",
            kvk: "",
            btw: ""
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
        basePricePerUser: 250
    },
    summary: {
        totalIncl: 0,
        totalExcl: 0,
        vat: 0
    }
};


/*
Initialiseert de registratie storage
*/
function initRegistrationStorage() {

    const existing = localStorage.getItem(STORAGE_KEY);

    if (!existing) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultRegistrationData));
        return;
    }

    try {

        const parsed = JSON.parse(existing);

        const merged = {
            ...defaultRegistrationData,
            ...parsed,
            step1: {
                ...defaultRegistrationData.step1,
                ...(parsed.step1 || {}),
                contactpersoon: {
                    ...defaultRegistrationData.step1.contactpersoon,
                    ...(parsed.step1?.contactpersoon || {})
                },
                adres: {
                    ...defaultRegistrationData.step1.adres,
                    ...(parsed.step1?.adres || {})
                },
                plaats: {
                    ...defaultRegistrationData.step1.plaats,
                    ...(parsed.step1?.plaats || {})
                },
                factuuradres: {
                    ...defaultRegistrationData.step1.factuuradres,
                    ...(parsed.step1?.factuuradres || {})
                },
                overige: {
                    ...defaultRegistrationData.step1.overige,
                    ...(parsed.step1?.overige || {})
                }
            },
            pricing: {
                ...defaultRegistrationData.pricing,
                ...(parsed.pricing || {})
            },
            summary: {
                ...defaultRegistrationData.summary,
                ...(parsed.summary || {})
            }
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));

    } catch {

        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultRegistrationData));

    }
}


/*
Data ophalen
*/
function getRegistrationData() {

    try {

        const stored = localStorage.getItem(STORAGE_KEY);

        if (!stored) {
            return structuredClone(defaultRegistrationData);
        }

        return JSON.parse(stored);

    } catch {

        return structuredClone(defaultRegistrationData);

    }

}


/*
Data opslaan
*/
function saveRegistrationData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}


/*
Registratie resetten
*/
function resetRegistrationData() {
    localStorage.removeItem(STORAGE_KEY);
}


/*
Euro formatter
*/
function formatEuro(value) {

    const number = Number(value || 0);

    return new Intl.NumberFormat("nl-BE", {
        style: "currency",
        currency: "EUR"
    }).format(number);

}