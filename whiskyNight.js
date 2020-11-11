//We will start with a function to determine the style of whisk(e)y that we will have. 
const styleOfWhisky = () => {
    const styles = ['scotch', 'bourbon', 'canadian', 'world'];
    const picker = styles[Math.floor(Math.random() * 4)];
    return picker;
};

//Next, we will populate some an object with various individual bottles of the styles of whisky

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
let firstTransition;
let secondTransition;
if (pick1 === pick2) {
     firstTransition = 'For the second bottle, we will once again be sampling a ${pick1} whisky.';
} else {
     firstTransition = 'The next bottle up is a ${pick2} whisky.';
};
if (pick3 === pick2 || pick3 === pick1) {
    secondTransition = 'The last bottle is once again a ${pick3} whisky.'
} else {
    secondTransition = 'Finally, we will be having a ${pick3} whisky.'
}
   
