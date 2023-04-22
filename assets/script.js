
var topic = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topic[Math.floor(Math.random() * topic.length)];

console.log('Here are the topics we learned through Prework:');
Toppicz()

function Toppicz() {
    for (var x = 0; x < topic.length; x++) {
        
    console.log(topic[x]);
    }
}

console.log('Which topic should we study first?');

SelectToppicz()

function SelectToppicz() {

    if (topic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (topic === 'Git') {
    console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
 
}