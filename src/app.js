const PLAYERS = [
    'Spiderman',
    'Captain America',
    'Wonderwoman',
    'Popcorn',
    'Gemwoman',
    'Bolt',
    'Antwoman',
    'Mask',
    'Tiger',
    'Captain',
    'Catwoman',
    'Fish',
    'Hulk',
    'Ninja',
    'Black Cat',
    'Volverine',
    'Thor',
    'Slayer',
    'Vader',
    'Slingo',
  ];
  
  const initPlayers = (players) => {
    const detailedPlayers = [];
    players.forEach((a, b) => {
      detailedPlayers.push({
        name: a,
        strength: getRandomStrength(),
        image: 'images/super-' + (b + 1) + '.png',
        type: b % 2 == 0 ? 'hero' : 'villain',
        id: b + 1,
      });
    });
    return detailedPlayers;
  };
  
const getRandomStrength = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  
  const view = (xyz) => {
    const player = document.createElement('div');
    player.classList.add('player');
    const image = document.createElement('img');
    image.setAttribute('src', xyz.image);
    image.setAttribute('alt', '');
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = xyz.name;
    const strength = document.createElement('div');
    strength.textContent = xyz.strength;
    strength.className = 'strength';
    player.append(image, name, strength);
    return player;
  };
  
  const buildPlayers = (players, type) => {
    const fragment = document.createElement('div');
    players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(view(player)));
    return fragment.innerHTML;
  
    
  };
  const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(
      players,
      'villain'
    );
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
  