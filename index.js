//The intent of this program is to create an inspirational message for the user 
//The message will be randomly composed from three components - the beginning, the middle, and the end
//Future revisions will include taking in the users name to incorporate into the message.

const messageMaker = {
    firstString: ['Hello you legend!', 'How\'s it going champ?', 'Greetings you brobarian!', 'What\'s up bossman?', 'How are you now.'],
    secondString: ['You\'re going to crush it today,', 'Everything is going to break your way,', 'You can do whatever you put your mind to,', 'Today is another day to #crushit,', 'You\'ve got this champ,'],
    thirdString: ['and a win for Canada is a win for the world!', 'and you will accomplish your dreams.', 'and your hard work will pay off in spades!', 'and there\'s no limit to what you can do!', 'and you\'re the man now, dog.'],
    randomMessage() {
        let firstPick = this.firstString[Math.floor(Math.random() * 5)];
        let secondPick = this.secondString[Math.floor(Math.random() * 5)];
        let thirdPick = this.thirdString[Math.floor(Math.random() * 5)];
        console.log(firstPick + ' ' + secondPick + ' ' + thirdPick);
    }
};

messageMaker.randomMessage();

