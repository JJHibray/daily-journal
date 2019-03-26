//making these more dynamic in the DOM

// const objectsJournalEntry = {
//     journalDate: "",
//     concepts: "",
//     journalEntry: "",
//     mood: ""
// }

// const allJournalEntries = [];

// allJournalEntries.push(objectsJournalEntry)

/*function submit() {
    let x = document.getElementById("myButton");
    allJournalEntries.push(objectsJournalEntry)
}

console.table(allJournalEntries)*/

const journalEntries = [
    {
        concept: "Array methods",
        date: "07/24/2018",
        entry: "We learned about array methods, but only forEach made sense",
        mood: "Ok"
    }
]

const makeJournalEntryComponent = (journalEntries) => {
    // Create your own HTML structure for a journal entry
    return `
    <p>${journalEntries.concept}<p>
    <p>${journalEntries.date}<p>
    <p>${journalEntries.entry}<p>
    <p>${journalEntries.mood}<p>


    `
};


    // Purpose: To render all journal entries to the DOM

    // Arguments: entries (array of objects)

    addArticleToDom = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        addArticleToDom.innerHTML += makeJournalEntryComponent(entry)

    });

};

// Invoke the render function

renderJournalEntries(journalEntries)

