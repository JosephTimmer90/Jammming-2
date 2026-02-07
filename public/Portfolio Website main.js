const elementsArray = [];
let start = "";
let previousTimeStamp;
let done = false;
let xOffSet = '';
let yOffsetPositions = [3,6,9,12,15,18,21];
let from = "original";
let nextFrom = "original"
let to = "";
let fromTo = "originalToAZ";
let yTranslatePositions = [];
let word = '';
let screenWidth = window.innerWidth;

const elementObjectsArray = [{
  elementId: 'skill-0',
  elementName: 'HTML',
  originalTopOffset: 3,
  class: "skill html-skill",
  spanClass: "span-icon html-icon",
  iconPath: "./Resources/html-512 icon.webp",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:'' 
  },
  {
  elementId: 'skill-1',
  elementName: 'CSS',
  originalTopOffset: 6,
  class: "skill css-skill",
  spanClass: "span-icon css-icon",
  iconPath: "./Resources/css icon.png",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset: ''
  },
  {
  elementId: 'skill-2',
  elementName: 'javaScript',
  originalTopOffset: 9,
  class: "skill javaScript-skill",
  spanClass: "span-icon javaScript-icon",
  iconPath: "./Resources/javascript-logo.svg",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:''
  },
  {
  elementId: 'skill-3',
  elementName: 'Git/Source Control',
  originalTopOffset: 12,
  class: "skill git-source-control-skill",
  spanClass: "span-icon git-source-control-icon",
  iconPath: "./Resources/Git_icon.svg.png",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:''
  },
  {
  elementId: 'skill-4',
  elementName: 'Responsive Web Design',
  originalTopOffset: 15,
  class: "skill responsive-web-design-skill",
  spanClass: "span-icon responsive-web-design-icon",
  iconPath: "/Resources/responsive design icon.png",
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:''
  },
  {
  elementId: 'skill-5',
  elementName: 'Microsoft Office',
  originalTopOffset: 18,
  class: "skill microsoft-office-skill",
  spanClass: "span-icon microsoft-office-icon",
  iconPath: "./Resources/microsoft-office_icon.webp",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:''
  },
  {
  elementId: 'skill-6',
  elementName: 'Communication',
  originalTopOffset: 21,
  class: "skill communication-skill",
  spanClass: "span-icon communication-icon",
  iconPath: "./Resources/communication icon.png",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:''
  },
  {
  elementId: 'skill-7',
  elementName: 'A',
  originalTopOffset: 24,
  class: "skill A-skill",
  spanClass: "span-icon A-icon",
  iconPath: "./Resources/html-512 icon.webp",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:''
  },
  {
  elementId: 'skill-8',
  elementName: 'B',
  originalTopOffset: 27,
  class: "skill B-skill",
  spanClass: "span-icon B-icon",
  iconPath: "./Resources/html-512 icon.webp",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:''
  },
  {
  elementId: 'skill-9',
  elementName: 'C',
  originalTopOffset: 30,
  class: "skill C-skill",
  spanClass: "span-icon C-icon",
  iconPath: "./Resources/html-512 icon.webp",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:''
  },
  {
  elementId: 'skill-10',
  elementName: 'I',
  originalTopOffset: 33,
  class: "skill I-skill",
  spanClass: "span-icon I-icon",
  iconPath: "./Resources/html-512 icon.webp",
  alphabeticalOrder: '',
  alphabeticalSortedTopOffset: '',
  lengthOrder: '',
  lengthSortedTopOffset:''
  }
];

  function orderElementsAlphabetically(){
    let elementNameArray = [];
    for(let i=0; i<elementObjectsArray.length; i++){
      elementNameArray.push(elementObjectsArray[i].elementName.toUpperCase())
    };    

    elementNameArray.sort();
    for(let i=0; i<elementObjectsArray.length; i++){
      for(let j=0; j<elementNameArray.length; j++){
        if(elementObjectsArray[i].elementName.toUpperCase() === elementNameArray[j]){
          elementObjectsArray[i].alphabeticalOrder = j;
        }
      }
    }
  }

  function fillElementObjectArrayWithAlphabeticalSortedTopOffsetValue(){
    for(i=0; i<elementObjectsArray.length; i++){
      elementObjectsArray[i].alphabeticalSortedTopOffset = (elementObjectsArray[i].alphabeticalOrder + 1) * 3;
    }
  }

  function orderElementsByLength(){
    let elementLengthArray = [];
    for(i=0; i<elementObjectsArray.length; i++){
      elementLengthArray[i] = elementObjectsArray[i].elementName.length;
    };
    elementLengthArray.sort(function(a, b) {
     return a - b;
    });

    for(i=0; i<elementObjectsArray.length; i++){
      for(j=elementLengthArray.length; j>=0; j--)
        if(elementObjectsArray[i].elementName.length === elementLengthArray[j]){
          elementObjectsArray[i].lengthOrder = j;
        };
    };

    for(i=0; i<elementObjectsArray.length; i++){
      for(j=i+1; j<elementObjectsArray.length; j++){
        if(elementObjectsArray[i].lengthOrder===elementObjectsArray[j].lengthOrder){
          elementObjectsArray[j].lengthOrder=elementObjectsArray[j].lengthOrder+1;
        }
      }
    }
  }

  function fillElementObjectArrayWithLengthSortedTopOffsetValue(){
    for(i=0; i<elementObjectsArray.length; i++){
      elementObjectsArray[i].lengthSortedTopOffset = (elementObjectsArray[i].lengthOrder + 1) * 3;
    }
  }

function addElementsToSkillsSection(){
  for(i=0; i<elementObjectsArray.length; i++){
    document.getElementById('skills').innerHTML+= `<div id="${elementObjectsArray[i].elementId}" class="skill ${elementObjectsArray[i].class}-skill" 
                                                      style="position: absolute;
                                                      top: ${elementObjectsArray[i].originalTopOffset}rem;
                                                      left: 3rem;
                                                       }">
                                                    <span class="span-icon ${elementObjectsArray[i].spanClass}-icon">
                                                      <img src="${elementObjectsArray[i].iconPath}" alt="">
                                                        ${elementObjectsArray[i].elementName}
                                                    </span>
                                                  </div>`
  }
}

function fillElementsArray(){
  for(let i=0; i<elementObjectsArray.length; i++){
    elementsArray[i] = document.getElementById(`skill-${i}`);
  }
}

function step(timeStamp) {
  if (start === "") {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;

  if (previousTimeStamp !== timeStamp) {
    // Math.min() is used here to make sure the element stops at exactly the end
    const count = Math.min(0.1 * elapsed, 500);

    xOffSet = (-1*(-250/10+count/10)**2 + 625)*((screenWidth-50)/1912);
    
    for( let i=0; i<elementObjectsArray.length; i++){
      elementsArray[i].style.transform = `translate(${xOffSet}px, ${yTranslatePositions[i]*count/500}rem)`;
    }
    if (count === 500) done = true;
  }

  if (elapsed < 5000) {
    // Stop the animation after 5 seconds
    previousTimeStamp = timeStamp;
    if (!done) {
      window.requestAnimationFrame(step);
    }
  }
}

function newSwitchStatement(){
  switch(word){
    case 'A-Z':
      for(i=0; i<elementObjectsArray.length; i++){
        yTranslatePositions[i] = elementObjectsArray[i].alphabeticalSortedTopOffset - elementObjectsArray[i].originalTopOffset;
        elementObjectsArray[i].currentTopOffset = elementObjectsArray[i].alphabeticalSortedTopOffset;
      }
      break;
    case 'S-L':
      for(i=0; i<elementObjectsArray.length; i++){
        yTranslatePositions[i] = elementObjectsArray[i].lengthSortedTopOffset - elementObjectsArray[i].originalTopOffset;
        elementObjectsArray[i].currentTopOffset = elementObjectsArray[i].lengthSortedTopOffset;
      }
      break;
    case 'Repeat A-Z':
      for(i=0; i<elementObjectsArray.length; i++){
        yTranslatePositions[i] = 0;
        elementsArray[i].style.cssText = `top: ${elementObjectsArray[i].alphabeticalSortedTopOffset}rem; position: absolute; left: 3rem;`;
        elementsArray[i].style.transform = '';
      }
      break;
    case 'Repeat S-L':
      for(i=0; i<elementObjectsArray.length; i++){
        yTranslatePositions[i] = 0;
        elementsArray[i].style.cssText = `top: ${elementObjectsArray[i].lengthSortedTopOffset}rem; position: absolute; left: 3rem;`;
        elementsArray[i].style.transform = '';
      }
      break;
    case 'A-Z to S-L':
      for(i=0; i<elementObjectsArray.length; i++){
        elementsArray[i].style.top = `${elementObjectsArray[i].currentTopOffset}rem`;
        elementsArray[i].style.transform = '';
        yTranslatePositions[i] = elementObjectsArray[i].lengthSortedTopOffset - elementObjectsArray[i].currentTopOffset;
        elementObjectsArray[i].currentTopOffset = elementObjectsArray[i].lengthSortedTopOffset;
      }
      break;
    case 'S-L to A-Z':
      for(i=0; i<elementObjectsArray.length; i++){
        elementsArray[i].style.top = `${elementObjectsArray[i].currentTopOffset}rem`;
        elementsArray[i].style.transform = '';
        yTranslatePositions[i] = elementObjectsArray[i].alphabeticalSortedTopOffset - elementObjectsArray[i].currentTopOffset;
        elementObjectsArray[i].currentTopOffset = elementObjectsArray[i].alphabeticalSortedTopOffset;
      }
      break;
    default:
      console.log('newSwitchStatement did not run as expected');
  }
  if(word==='thisOne'){
    word = 'thatOne';
  }
  start = "";
  done = false;
  window.requestAnimationFrame(step);
}

orderElementsAlphabetically();
orderElementsByLength();
fillElementObjectArrayWithAlphabeticalSortedTopOffsetValue();
fillElementObjectArrayWithLengthSortedTopOffsetValue();
addElementsToSkillsSection();
fillElementsArray();

function handleAZClick(){
  switch(word){
    case '':
      word = 'A-Z';
      newSwitchStatement();
      break;
    case 'A-Z':
      word = 'Repeat A-Z';
      newSwitchStatement();
      break;
    case 'Repeat A-Z':
      word = 'Repeat A-Z';
      newSwitchStatement();
      break;
    case 'S-L':
      word = 'S-L to A-Z';
      newSwitchStatement();
      break;
    case 'Repeat S-L':
      word = 'S-L to A-Z';
      newSwitchStatement();
      break;
    case 'A-Z to S-L':
      word = 'S-L to A-Z';
      newSwitchStatement();
      break;
    case 'S-L to A-Z':
      word = 'Repeat A-Z';
      newSwitchStatement();
      break;
  } 
}

function handleLongestToShortestClick(){
  switch(word){
    case '':
      word = 'S-L';
      newSwitchStatement();
      break;
    case 'A-Z':
      word = 'A-Z to S-L';
      newSwitchStatement();
      break;
    case 'Repeat A-Z':
      word = 'A-Z to S-L';
      newSwitchStatement();
      break;
    case 'S-L':
      word = 'Repeat S-L';
      newSwitchStatement();
      break;
    case 'Repeat S-L':
      word = 'Repeat S-L';
      newSwitchStatement();
      break;
    case 'S-L to A-Z':
      word = 'A-Z to S-L';
      newSwitchStatement();
      break;
    case 'A-Z to S-L':
      word = 'Repeat S-L';
      newSwitchStatement();
      break;
  }
}

document.getElementById("AZ").addEventListener("click", handleAZClick);
document.getElementById("S-L").addEventListener("click", handleLongestToShortestClick);

//Mobile dropdown menu
const mobileNavIcon = document.getElementById("mobile-nav-icon");
const mobileNavDropdown = document.getElementById("mobile-nav-dropdown");

function openOrCloseMenu(){
  if(mobileNavDropdown.classList.contains("closed")){
    mobileNavDropdown.classList.add("open");
    mobileNavDropdown.classList.remove("closed");
  }
  else if(mobileNavDropdown.classList.contains("open")){
    mobileNavDropdown.classList.add("closed");
    mobileNavDropdown.classList.remove("open");
  }
}

mobileNavIcon.addEventListener('click', openOrCloseMenu);








