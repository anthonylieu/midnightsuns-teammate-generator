function randomChars() {
    const chars = [
      { name: 'Blade', photoUrl: 'https://i.imgur.com/YIUH20e.png' },
      { name: 'Captain America', photoUrl: 'https://i.imgur.com/5vWmE4Z.png' },
      { name: 'Captain Marvel', photoUrl: 'https://i.imgur.com/F7Mgmo8.png' },
      { name: 'Deadpool', photoUrl: 'https://i.imgur.com/iw2n4Wj.png' },
      { name: 'Doctor Strange', photoUrl: 'https://i.imgur.com/Z2ulINN.png' },
      { name: 'Ghost Rider', photoUrl: 'https://i.imgur.com/aFXdwpX.png' },
      { name: 'Hulk', photoUrl: 'https://i.imgur.com/PtNzEgB.png' },
      { name: 'Iron Man', photoUrl: 'https://i.imgur.com/NEu4a0y.png' },
      { name: 'Magik', photoUrl: 'https://i.imgur.com/HoOiOM7.png' },
      { name: 'Morbius', photoUrl: 'https://i.imgur.com/rbcEabb.png' },
      { name: 'Nico Minoru', photoUrl: 'https://i.imgur.com/WzsP1o9.png' },
      { name: 'Scarlet Witch', photoUrl: 'https://i.imgur.com/wQql50k.png' },
      { name: 'Spider-Man', photoUrl: 'https://i.imgur.com/snJzhp6.png' },
      { name: 'Venom', photoUrl: 'https://i.imgur.com/Sv5i1H2.png' },
      { name: 'Wolverine', photoUrl: 'https://i.imgur.com/s1HY1aZ.png' }
    ];
    const result = [];
    while (result.length < 4) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      const randomChar = chars[randomIndex];
      if (!result.some(char => char.name === randomChar.name)) {
        result.push(randomChar);
      }
    }
    return result;
  }
  
  const chars = document.querySelectorAll('.char');
  const pickedChars = randomChars();
  
  chars.forEach((char, index) => {
    const name = pickedChars[index].name;
    const photoUrl = pickedChars[index].photoUrl;
    char.textContent = name;
    const img = document.createElement('img');
    img.src = photoUrl;
    img.alt = name;
    char.appendChild(img);
  });