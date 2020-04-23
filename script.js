var name="Squirt"

function changeName() {
  const nameTag = document.getElementById('name')
  if (nameTag.innerText == name) {
    nameTag.innerText = 'Mama'
  } else if (nameTag.innerText == 'Mama') {
    nameTag.innerText = 'Dada'
  } else if (nameTag.innerText == 'Dada') {
    nameTag.innerText = 'Caden'
  } else if (nameTag.innerText == 'Caden')
    nameTag.innerText == 'Noah'
  {
    nameTag.innerText = name
  }
  setTimeout(changeName, 1000)
}

//changeName()

const nameTag = document.getElementById('name')
nameTag.innerText = name

const nameInput = document.getElementById('yourName')

function yourNameChanged() {
  nameTag.innerText = nameInput.value
}
