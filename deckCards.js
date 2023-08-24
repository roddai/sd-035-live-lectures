const data = {
  cards: [
    {
      id: 1,
      name: 'Blue-Eyes White Dragon',
      typeId: 1,
      attributeId: 1,
      atk: 3000,
      def: 2500,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/89631139.jpg',
      description: 'This legendary dragon is a powerful engine of destruction, Virtually invencible, very few have faced this awesome creature and lived to tell the tale.',
    },
    {
      id: 2,
      name: 'Dark Magician',
      typeId: 2,
      attributeId: 2,
      atk: 2500,
      def: 2100,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/46986414.jpg',
      description: 'The ultimate wizard in terms of attack and defense',
    },
    {
      id: 3,
      name: 'Arianna the Labrynth Servant',
      typeId: 3,
      attributeId: 2,
      atk: 1600,
      def: 2100,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/1225009.jpg',
      description: 'If this card is Normal or Special Summoned: You can add 1 "Labrynth" card from your Deck to your hand, except "Arianna the Labrynth Servant". If another monster(s) leaves the field by your Normal Trap effect (except during the Damage Step), You can draw 1 card, then you can apply this effect. ⚫️ From your hand, either Special Summon 1 Fiend monster, or Set 1 Spell/Trap. You can only use 1 "Aryanna the Labrynth Servant" effect per turn, and only once that turn.',
    },
    {
      id: 4,
      name: 'Red-Eyes Black Dragon',
      typeId: 1,
      attributeId: 2,
      atk: 2400,
      def: 2000,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/74677422.jpg',
      description: 'A ferocious dragon with a deadly attack.',
    },
    {
      id: 5,
      name: 'D.D. Crow',
      typeId: 4,
      attributeId: 2,
      atk: 100,
      def: 100,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/24508238.jpg',
      description: '(Quick Effect): You can discard this card to the GY, then target 1 card in your opponent"s GY: banish that target.',
    },
    {
      id: 6,
      name: 'Abaki',
      typeId: 3,
      attributeId: 3,
      atk: 1700,
      def: 1100,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/12694768.jpg',
      description: 'When this card is destroyed and sent to the Graveyard by battle, both players take 500 damage.',
    },
    {
      id: 7,
      name: 'Absolute Crusader',
      typeId: 5,
      attributeId: 4,
      atk: 1700,
      def: 1100,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/70832512.jpg',
      description: 'If a Level 5 or higher monster(s) is Special Summoned: Tribute this face-up card; destroy that Level 5 or higher monster(s).',
    },
    {
      id: 8,
      name: 'Eka the Flame Buddy',
      typeId: 5,
      attributeId: 3,
      atk: 1500,
      def: 200,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/35283277.jpg',
      description: 'If this card is Normal or Special Summoned: You can target 1 face-up Monster Card in either player"s Spell or Trap Zone: Special Summon it to your field. You can target 1 other face-up monster you control; equip that face-up monster to this card as an Equip Spell that gives it 500 ATK. You can only use each effect of "Eka the Flame Buddy" once per turn.',
    },
    {
      id: 9,
      name: 'Enlightenment Paladin',
      typeId: 2,
      attributeId: 2,
      atk: 2500,
      def: 2000,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/59123194.jpg',
      description: '1 Tuner + 1 or more non-Tuner monsters. If this card is Synchro Summoned using a "Magician" Pendulum Monster as Material: You can target 1 Spell Card in your Graveyard: add it to your hand. Tou can only use this effect of "Enlightenment Paladin" once per turn. When this card destroys an opponent"s monster by battle: You can inflict damage to your opponents equal to that monster"s original ATK.',
    },
    {
      id: 10,
      name: 'Dragon Queen of Tragic Endings',
      typeId: 1,
      attributeId: 2,
      atk: 1900,
      def: 2600,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/80513550.jpg',
      description: 'This card cannot be Normal Summoned or Set. This card can only be Special Summoned by controlling 3 or more face-up Continuous Spell Cards. When this attacking card inflicts Battle Damage to your opponent, your opponent selects and sends 1 card from their hand to the Graveyard, and you draw 1 card. During your Standby Phase, if this card is in your Graveyard and was sent there from the field, you can send 1 face-up Continuous Spell Card you control to the Graveyard to Special Summon this card from the Graveyard.',
    },
    {
      id: 11,
      name: 'Monster Reborn',
      typeId: 6,
      attributeId: 5,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/83764719.jpg',
      description: 'Target 1 monster in either GY; Special Summon it.',
    },
    {
      id: 12,
      name: 'Illusion Magic',
      typeId: 6,
      attributeId: 5,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/73616671.jpg',
      description: 'Tribute 1 Spellcaster monster; add up to 2 copies of "Dark Magician" from your Deck and/or GY to your hand. You can only activate 1 "Illusion Magic" per turn.',
    },
    {
      id: 13,
      name: 'Saber Vault',
      typeId: 6,
      attributeId: 5,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/73787254.jpg',
      description: 'Each face-up "X-Saber" monster on the field gains 100 ATK x its Level, and loses 100 DEF x its Level.',
    },
    {
      id: 14,
      name: 'Invocation',
      typeId: 6,
      attributeId: 5,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/74063034.jpg',
      description: `Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters from your hand as Fusion Material. If Summoning an "Invoked" Fusion Monster this way, you can also banish monsters from your field and/or either player's GY as Fusion Material. If this card is in your GY: You can target 1 of your banished "Aleister the Invoker"; shuffle this card into the Deck, and if you do, add that card to your hand. You can only use this effect of "Invocation" once per turn.`
    },
    {
      id: 15,
      name: 'Blue-Eyes Ultimate Dragon',
      typeId: 7,
      attributeId: 1,
      atk: 4500,
      def: 3800,
      img: 'https://ygoprodeck.com/cdn-cgi/image/format=auto,width=313/https://images.ygoprodeck.com/images/cards/23995346.jpg',
      description: '"Blue-Eyes White Dragon" + "Blue-Eyes White Dragon" + "Blue-Eyes White Dragon"',
    },
  ],

  types: [
    {
      id: 1,
      name: 'Dragon',
    },
    {
      id: 2,
      name: 'Spellcaster',
    },
    {
      id: 3,
      name: 'Fiend',
    },
    {
      id: 4,
      name: 'Winged Beast',
    },
    {
      id: 5,
      name: 'Warrior',
    },
    {
      id: 6,
      name: 'Spell Card'
    },
    {
      id: 7,
      name: 'Fusion Monster'
    },
    {
      id: 8,
      name: 'Trybe Team'
    },
    {
      id: 9,
      name: 'Turma 31'
    },
  ],

  attributes: [
    {
      id: 1,
      name: 'Light',
    },
    {
      id: 2,
      name: 'Dark',
    },
    {
      id: 3,
      name: 'Fire',
    },
    {
      id: 4,
      name: 'Earth',
    },
    {
      id: 5,
      name: 'N/A',
    },
    {
      id: 6,
      name: 'Dev'
    }
  ],
}

module.exports = data;