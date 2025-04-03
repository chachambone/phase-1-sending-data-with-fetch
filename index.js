function submitData(name, email) {
    const userData = { name, email };

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        document.body.innerHTML += `<p>${data.id}</p>`;  
        return data;
    })
    .catch(error => {
        document.body.innerHTML += `<p>${error.message}</p>`;  
    });
}
