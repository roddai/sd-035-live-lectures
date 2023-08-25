const data = require('./deckCards');

/* Apresente um objeto contendo os tipos de cards como chaves e, como valor, um array contendo os cards daquele tipo
Exemplo: 
{
  Dragon: [
    {
      id: 1,
      name: 'Blue-Eyes White Dragon',
      typeId: 1,
      attributeId: 1,
      atk: 3000,
      def: 2500,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/89631139.jpg',
      description: 'This legendary dragon is a powerful engine of destruction, Virtually invencible, very few have faced this awesome creature and lived to tell the tale.'
    },
    {
      id: 4,
      name: 'Red-Eyes Black Dragon',
      typeId: 1,
      attributeId: 2,
      atk: 2400,
      def: 2000,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/74677422.jpg',
      description: 'A ferocious dragon with a deadly attack.'
    },
    {
      id: 10,
      name: 'Dragon Queen of Tragic Endings',
      typeId: 1,
      attributeId: 2,
      atk: 1900,
      def: 2600,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/80513550.jpg',
      description: 'This card cannot be Normal Summoned or Set. This card can only be Special Summoned by controlling 3 or more face-up Continuous Spell Cards. When this attacking card inflicts Battle Damage to your opponent, your opponent selects and sends 1 card from their hand to the Graveyard, and you draw 1 card. During your Standby Phase, if this card is in your Graveyard and was sent there from the field, you can send 1 face-up Continuous Spell Card you control to the Graveyard to Special Summon this card from the Graveyard.'
    }
  ],
  ...
*/
