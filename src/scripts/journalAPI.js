

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(parsedEntries => { 
        parsedEntries.forEach(entry => {
            console.table(entry)
            const entriesAsHTML = makeJournalEntryComponent(entry)
            addEntryToDom(entriesAsHTML)
        })
       

        // What should happen when we finally have the array?
   })