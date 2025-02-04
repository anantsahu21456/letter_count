document.getElementById('addRecordbtn').addEventListener('click',functionnameokadd)

function fetchAndAddCharacter(){
    const randomId = Math.floor(Math.random()*83) + 1
    const apiurl = `https://swapi.dev/api/people/${randomId}`;

    //& we have to fetch the data from this apiurl ok ,

    axios.get(apiurl)
    .then(response => {
        const name = response.data.name;
        if(name){
            addRowToTble(randomId,name)
        }
        else{
            console.log('No data found')
        }
})
        .catch(err=>{
            console.log(err)
        })
}
function addRowToTble(id,name){
    const tablebody = document.getElementById('tableKaBody')
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td><button class = "deletebtn" onclick="deleteRow(this) > delete </button></td>`;
    tablebody.appendChild(row)
}
function deleteRow(button){
button.parentElement.parentElement.remove()
}