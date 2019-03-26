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

    

const addEntryToDom = (journalEntries) => {
    document.querySelector(".entryLog").innerHTML += journalEntries


}


// Invoke the render function

//renderJournalEntries(journalEntries)

