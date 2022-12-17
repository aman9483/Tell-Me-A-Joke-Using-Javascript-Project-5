const Jokes=[{


   j:" What do you call an ant who fights crime? A vigilANTe!"

},

{

    j:" How many programmers does it take to change a light bulb? None, because it is a hardware problem."
},

{

    j:"What is the speed of the system running on 8 hobbits? 1 Hob-byte."

},

{

    j:"How did the SEO content writer couple react to twins? For the first time, they were happy with duplicate content!"
},

{
    j:"What is a programmer's favorite eyewear? Google."
},

{

    j:"What made the JavaScript developer so sad? He did not Node how to Express himself."


},


{

    j:"Why was the mobile phone wearing glasses? Because it lost its contacts."
},

{

    j:"Why did the developer become so poor? Because he used up all his cache"
},

{

    j:"What was the name of the band that did not perform any gigs? 1023 MB."
},

{


},

{

    j:" Why do chemists love using internet browser? Because it has chrom-ate!"
},

{

    j:" How do computers attack each other? By using pop-up ads."
},

{

    j:". What did the computer have during his break time? He had a byte!"
},

{

    j:" What made the Java developers wear glasses?  They can't C."
},

{

   j: "Why are snails slow? Because they’re carrying a house on their back."

},

{

    j:"What’s the smartest insect? A spelling bee!"
},

{

    j:"What does a storm cloud wear under his raincoat? Thunderwear."
},

{

    j:" What is fast, loud and crunchy? A rocket chip."
},

{

    j:"How does the ocean say hi? It waves!"
},


{

    j:"What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates."
},

{

    j:"Why did the teddy bear say no to dessert? Because she was stuffed."
},

{

    j:"Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands."
},

{


    j:"Name the kind of tree you can hold in your hand? A palm tree!"
},


];


let card_text = document.querySelector('.card-text');

let btn = document.querySelector('.btn');

let count = 0;


const loadJokes = () =>{

    card_text.innerHTML = Jokes[count].j;

    
};



btn.addEventListener('click', e=>{

    loadJokes();

    count++;
})





