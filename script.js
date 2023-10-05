fetch('', {
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + btoa('admin:superadmin') // Lägg till ditt användarnamn och lösenord här
    }
})
.then(response => response.json())
.then(data => {
    // Extrahera data från JSON-svaret här
    var jsonData = data; // Hela JSON-svaret

    // Hämta listan över dokument
    var documents = jsonData.documentList.documents;

    // Skapa en tom lista för att lagra den extraherade informationen
    var extractedData = [];

    // Loopa igenom varje dokument och extrahera önskad information
    for (var i = 0; i < documents.length; i++) {
        var document = documents[i];
        var extractedInfo = {
            name: document.name,
            age: document.age,
            bloodType: document.blood_type,
            city: document.city,
            height: document.height,
            weight: document.weight,
            phone: document.phone,
            email: document.email
        };
        extractedData.push(extractedInfo);
    }

    // Resultatet är nu lagrat i extractedData-arrayen
    console.log(extractedData);
})
.catch(error => {
    console.error('API error:', error);
});
