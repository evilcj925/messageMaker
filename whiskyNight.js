//We will start with a function to determine the style of whisk(e)y that we will have. 
const styleOfWhisky = () => {
    const styles = ['scotch', 'bourbon', 'canadian', 'world'];
    const picker = styles[Math.floor(Math.random() * styles.length)];
    return picker;
};

//Next, we will populate an object with various individual bottles of the styles of whisky

const whiskies = {
    scotch: ['Glenfiddich Fire and Cane', 'Highland Park 25', 'Compass Box Hedonism', 'Glenfarclas 15', 'Macallan Gold'],
    bourbon: ['E.H. Taylor Straight Rye', 'Weller Special Reserve', 'Wild Turkey Rare Breed', '1792 Small Batch', 'Eagle Rare 10 Year Old'],
    canadian: ['Lot 40 Copper Cask', 'Bearface One Eleven', 'Forty Creek Barrel Select', 'Wiser\'s Special Blend', 'Alberta Premium Cask Strength Rye'],
    world: ['Nikka From The Barrel', 'Nikka Coffey Grain', 'Amrut Fusion', 'Jameson Black Barrel', 'Gelagerde Korenwyn']
};

//Next, we pick our whiskies. Three course tasting.

let pick1 = styleOfWhisky();
let pick2 = styleOfWhisky();
let pick3 = styleOfWhisky();


//Now i'm creating some transition sentences in the event the picks are duplicate.
let firstTransition;
let secondTransition;
if (pick1 === pick2) {
     firstTransition = `For the second bottle, we will once again be sampling a ${pick1} whisky:`;
} else {
     firstTransition = `The next bottle up is a ${pick2} whisky:`;
};
if (pick3 === pick2 || pick3 === pick1) {
    secondTransition = `The last bottle is once again a ${pick3} whisky:`
} else {
    secondTransition = `Finally, we will be having a ${pick3} whisky:`
}


//Next, we are going to assign bottle names, from the {whiskies} object, to each of the three bottles
//The first bottle is straightforward, but for bottles 2 & 3 we want to ensure there are no duplicates
const bottle1 = whiskies[pick1][Math.floor(Math.random() * 5)];

const bottle2picker = () => {
    let name2 = whiskies[pick2][Math.floor(Math.random() * 5)];
    if (pick2 === pick1) {
        
        while (name2 === bottle1) {
            name2 = whiskies[pick2][Math.floor(Math.random() * 5)];
        };
    };
    return name2;
}
const bottle2 = bottle2picker();

const bottle3picker = () => {
    let name3 = whiskies[pick3][Math.floor(Math.random() * 5)];
    if (pick3 === pick1 || pick3 === pick2) {
        
        while (name3 === bottle1 || name3 === bottle2) {
            name3 = whiskies[pick3][Math.floor(Math.random() * 5)];
        };
        
    };
    return name3;   
}
const bottle3 = bottle3picker(); 

//Lastly, lets put it all together in a neat output. 
console.log(`Welcome to tonight's whisk(e)y tasting! We will be tasting three bottles.`);
console.log(`First up is a ${pick1} whisky: ${bottle1}.`);
console.log(`${firstTransition} ${bottle2}.`);
console.log(`${secondTransition} ${bottle3}. Enjoy!`);

   
