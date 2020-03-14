import malePerson from './malePerson';
import femalePerson from './femalePerson';


const sampleData = [...malePerson, ...femalePerson];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(sampleData);

export default sampleData;