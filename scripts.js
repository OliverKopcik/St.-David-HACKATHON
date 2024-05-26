const questions = {
    math: {
        easy: [
            { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
            { question: "What is 5 x 6?", options: ["25", "30", "35", "40"], answer: "30" },
            { question: "What is 10 - 3?", options: ["5", "6", "7", "8"], answer: "7" },
            { question: "What is 4 ÷ 2?", options: ["1", "2", "3", "4"], answer: "2" },
            { question: "What is 7 + 9?", options: ["14", "15", "16", "17"], answer: "16" },
            { question: "What is 3 x 4?", options: ["8", "10", "12", "14"], answer: "12" },
            { question: "What is 20 - 15?", options: ["3", "4", "5", "6"], answer: "5" },
            { question: "What is 6 ÷ 3?", options: ["1", "2", "3", "4"], answer: "2" },
            { question: "What is 8 + 7?", options: ["13", "14", "15", "16"], answer: "15" },
            { question: "What is 9 x 2?", options: ["16", "17", "18", "19"], answer: "18" },
            { question: "What is 3 + 4?", options: ["6", "7", "8", "9"], answer: "7" },
            { question: "What is 8 x 3?", options: ["16", "18", "20", "24"], answer: "24" },
            { question: "What is 15 - 7?", options: ["6", "7", "8", "9"], answer: "8" },
            { question: "What is 10 ÷ 5?", options: ["1", "2", "3", "4"], answer: "2" },
            { question: "What is 6 + 6?", options: ["10", "11", "12", "13"], answer: "12" },
            { question: "What is 4 x 5?", options: ["16", "18", "20", "22"], answer: "20" },
            { question: "What is 18 - 9?", options: ["7", "8", "9", "10"], answer: "9" },
            { question: "What is 12 ÷ 4?", options: ["2", "3", "4", "5"], answer: "3" },
            { question: "What is 7 + 5?", options: ["10", "11", "12", "13"], answer: "12" },
            { question: "What is 6 x 3?", options: ["15", "16", "17", "18"], answer: "18" },
            { question: "What is 20 - 12?", options: ["6", "7", "8", "9"], answer: "8" },
            { question: "What is 9 ÷ 3?", options: ["2", "3", "4", "5"], answer: "3" },
            { question: "What is 8 + 4?", options: ["10", "11", "12", "13"], answer: "12" },
            { question: "What is 7 x 2?", options: ["12", "13", "14", "15"], answer: "14" },
            { question: "What is 16 - 8?", options: ["6", "7", "8", "9"], answer: "8" },
            { question: "What is 15 ÷ 5?", options: ["2", "3", "4", "5"], answer: "3" },
            { question: "What is 5 + 7?", options: ["10", "11", "12", "13"], answer: "12" },
            { question: "What is 9 x 3?", options: ["24", "25", "26", "27"], answer: "27" },
            { question: "What is 14 - 6?", options: ["6", "7", "8", "9"], answer: "8" },
            { question: "What is 8 ÷ 2?", options: ["3", "4", "5", "6"], answer: "4" }
        ],
        medium: [
            { question: "What is 8 ÷ 2?", options: ["2", "3", "4", "5"], answer: "4" },
            { question: "What is the square root of 144?", options: ["12", "13", "14", "15"], answer: "12" },
            { question: "What is 15% of 80?", options: ["10", "11", "12", "13"], answer: "12" },
            { question: "What is the value of x in the equation 3x + 5 = 17?", options: ["3", "4", "5", "6"], answer: "4" },
            { question: "What is the area of a rectangle with length 8 and width 5?", options: ["32", "36", "40", "48"], answer: "40" },
            { question: "What is the value of y in the equation 2y - 4 = 10?", options: ["5", "6", "7", "8"], answer: "7" },
            { question: "What is the perimeter of a square with side length 6?", options: ["18", "20", "22", "24"], answer: "24" },
            { question: "What is the value of x in the equation 2x + 3x = 15?", options: ["2", "3", "4", "5"], answer: "3" },
            { question: "What is the volume of a cube with side length 4?", options: ["48", "56", "64", "72"], answer: "64" },
            { question: "What is the value of y in the equation 3y - 6 = 12?", options: ["4", "5", "6", "7"], answer: "6" },
            { question: "What is 3/4 of 24?", options: ["16", "17", "18", "19"], answer: "18" },
            { question: "What is the value of x in the equation 2x - 6 = 10?", options: ["6", "7", "8", "9"], answer: "8" },
            { question: "What is 25% of 60?", options: ["12", "13", "14", "15"], answer: "15" },
            { question: "What is the area of a circle with radius 5?", options: ["62", "70", "78", "86"], answer: "78" },
            { question: "What is the value of y in the equation 4y + 8 = 24?", options: ["3", "4", "5", "6"], answer: "4" },
            { question: "What is 2/3 of 30?", options: ["18", "19", "20", "21"], answer: "20" },
            { question: "What is the value of x in the equation 5x - 10 = 20?", options: ["4", "5", "6", "7"], answer: "6" },
            { question: "What is 40% of 75?", options: ["27", "28", "29", "30"], answer: "30" },
            { question: "What is the perimeter of a rectangle with length 12 and width 8?", options: ["36", "38", "40", "42"], answer: "40" },
            { question: "What is the value of y in the equation 3y + 9 = 30?", options: ["5", "6", "7", "8"], answer: "7" },
            { question: "What is 5/6 of 48?", options: ["38", "39", "40", "41"], answer: "40" },
            { question: "What is the value of x in the equation 4x - 12 = 20?", options: ["6", "7", "8", "9"], answer: "8" },
            { question: "What is 60% of 50?", options: ["27", "28", "29", "30"], answer: "30" },
            { question: "What is the volume of a cylinder with radius 3 and height 5?", options: ["94", "113", "132", "151"], answer: "113" },
            { question: "What is the value of y in the equation 2y - 8 = 18?", options: ["11", "12", "13", "14"], answer: "13" },
            { question: "What is 3/5 of 45?", options: ["24", "25", "26", "27"], answer: "27" },
            { question: "What is the value of x in the equation 6x + 12 = 36?", options: ["3", "4", "5", "6"], answer: "4" },
            { question: "What is 35% of 120?", options: ["38", "39", "40", "42"], answer: "42" },
            { question: "What is the value of y in the equation 5y - 15 = 25?", options: ["6", "7", "8", "9"], answer: "8" }
        ],
        hard: [
            { question: "At a restaurant, the bill for 3 adults and 2 children was $92. If each adult paid $18 and each child paid $8, how much was the tip?", options: ["$8", "$22", "$20", "$14"], answer: "$22" },
            { question: "A baker has 24 pounds of flour. If she uses 3/4 of the flour to make bread and 1/6 of the remaining flour to make cookies, how many pounds of flour are left?", options: ["1", "2", "3", "5"], answer: "1" },
            { question: "John has 3 times as many marbles as Sarah. If they have a total of 28 marbles, how many marbles does Sarah have?", options: ["6", "7", "8", "9"], answer: "7" },
            { question: "A train travels 120 miles in 3 hours. At the same rate, how many miles will it travel in 5 hours?", options: ["180", "190", "200", "210"], answer: "200" },
            { question: "A rectangular garden is 12 meters long and 8 meters wide. If a fence is built around the garden at a cost of $5 per meter, what is the total cost of the fence?", options: ["$180", "$195", "$200", "$215"], answer: "$200" },
            { question: "A store offers a 20% discount on all items. If a shirt originally costs $30, what is the discounted price?", options: ["$22", "$23", "$24", "$25"], answer: "$24" },
            { question: "A farmer has a rectangular field that is 50 meters long and 30 meters wide. If he wants to plant trees around the perimeter of the field, with each tree 5 meters apart, how many trees will he need?", options: ["28", "30", "32", "40"], answer: "32" },
            { question: "A car travels 120 miles on 10 gallons of gasoline. At the same rate of consumption, how many gallons of gasoline will be needed to travel 180 miles?", options: ["12", "17", "18", "19"], answer: "18" },
            { question: "A bakery has 48 cupcakes to be divided equally among 6 boxes. If each box must contain the same number of cupcakes, how many cupcakes will be in each box?", options: ["7", "8", "9", "10"], answer: "8" },
            { question: "A store sells notebooks for $2 each and pens for $1 each. If a customer buys 3 notebooks and 5 pens, and pays with a $20 bill, how much change should they receive?", options: ["$8", "$9", "$10", "$11"], answer: "$9" } 
        ]
    },
    science: {
        easy: [
            { question: "What is the smallest particle of an element?", options: ["Atom", "Molecule", "Proton", "Neutron"], answer: "Atom" },
            { question: "Which planet in our solar system is known as the 'Red Planet'?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars" },
            { question: "What is the process by which plants make their own food?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], answer: "Photosynthesis" },
            { question: "Which of the following is a renewable source of energy?", options: ["Coal", "Natural Gas", "Solar Power", "Gasoline"], answer: "Solar Power" },
            { question: "What is the name of the force that attracts objects towards each other?", options: ["Friction", "Gravity", "Magnetism", "Electricity"], answer: "Gravity" },
            { question: "Which of the following is a compound?", options: ["Oxygen", "Hydrogen", "Water", "Carbon"], answer: "Water" },
            { question: "What is the study of living organisms called?", options: ["Chemistry", "Physics", "Biology", "Geology"], answer: "Biology" },
            { question: "Which of the following is a state of matter?", options: ["Solid", "Liquid", "Gas", "All of the above"], answer: "All of the above" },
            { question: "What is the name of the process by which water changes from a liquid to a gas?", options: ["Melting", "Freezing", "Evaporation", "Condensation"], answer: "Evaporation" },
            { question: "Which of the following is a unit of measurement for length?", options: ["Kilogram", "Liter", "Meter", "Celsius"], answer: "Meter" },
        ],
        medium: [
            { question: "What is the process by which plants convert light energy into chemical energy?", options: ["Photosynthesis", "Respiration", "Fermentation", "Decomposition"], answer: "Photosynthesis" },
            { question: "Which of the following is a renewable energy source?", options: ["Coal", "Natural Gas", "Solar Power", "Petroleum"], answer: "Solar Power" },
            { question: "What is the unit used to measure the intensity of an earthquake?", options: ["Decibel", "Kelvin", "Richter Scale", "Ampere"], answer: "Richter Scale" },
            { question: "Which of the following is a compound?", options: ["Oxygen", "Hydrogen", "Water", "Nitrogen"], answer: "Water" },
            { question: "What is the process by which water changes from a liquid to a gas called?", options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"], answer: "Evaporation" },
            { question: "Which of the following is a primary color of light?", options: ["Yellow", "Purple", "Blue", "Green"], answer: "Blue" },
            { question: "What is the name of the force that attracts objects towards each other?", options: ["Friction", "Gravity", "Magnetism", "Inertia"], answer: "Gravity" },
            { question: "Which of the following is a chemical element?", options: ["Alcohol", "Sugar", "Salt", "Carbon"], answer: "Carbon" },
            { question: "What is the process by which plants and animals obtain energy from food called?", options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"], answer: "Respiration" },
            { question: "Which of the following is a unit of measurement for electric current?", options: ["Volt", "Watt", "Ampere", "Ohm"], answer: "Ampere" },
        ],
        hard: [
            { question: "What is the fundamental particle that carries the strong nuclear force?", options: ["Photon", "Gluon", "Graviton", "Neutrino"], answer: "Gluon" },
            { question: "Which of the following is the correct order of increasing wavelength in the electromagnetic spectrum?", options: ["Gamma rays, X-rays, Ultraviolet, Visible light", "Visible light, Ultraviolet, X-rays, Gamma rays", "Gamma rays, Visible light, X-rays, Ultraviolet", "Ultraviolet, X-rays, Gamma rays, Visible light"], answer: "Gamma rays, X-rays, Ultraviolet, Visible light" },
            { question: "What is the process by which plants convert light energy into chemical energy?", options: ["Respiration", "Fermentation", "Photosynthesis", "Digestion"], answer: "Photosynthesis" },
            { question: "Which of the following is the correct equation for the theory of relativity proposed by Albert Einstein?", options: ["E = mc^2", "F = ma", "PV = nRT", "V = IR"], answer: "E = mc^2" },
            { question: "What is the name of the process by which a solid directly transitions into a gas without passing through the liquid phase?", options: ["Condensation", "Sublimation", "Evaporation", "Deposition"], answer: "Sublimation" },
            { question: "Which of the following is the correct order of increasing atomic mass for the elements hydrogen, carbon, and oxygen?", options: ["Hydrogen, Carbon, Oxygen", "Carbon, Hydrogen, Oxygen", "Oxygen, Hydrogen, Carbon", "Hydrogen, Oxygen, Carbon"], answer: "Hydrogen, Carbon, Oxygen" },
            { question: "What is the name of the process by which a substance absorbs or releases energy in the form of heat without changing its temperature?", options: ["Conduction", "Convection", "Radiation", "Phase change"], answer: "Phase change" },
            { question: "Which of the following is the correct formula for calculating the acceleration due to gravity on the surface of a planet?", options: ["g = GM/r^2", "g = 4πGρr", "g = 2πr/T^2", "g = mv^2/r"], answer: "g = GM/r^2" },
            { question: "What is the name of the process by which a liquid is converted into a gas?", options: ["Condensation", "Evaporation", "Sublimation", "Deposition"], answer: "Evaporation" },
            { question: "Which of the following is the correct order of increasing energy for the different types of electromagnetic radiation?", options: ["Radio waves, Microwaves, Infrared, Visible light", "Visible light, Infrared, Microwaves, Radio waves", "Radio waves, Visible light, Infrared, Microwaves", "Microwaves, Infrared, Visible light, Radio waves"], answer: "Radio waves, Microwaves, Infrared, Visible light" }
        ]
    },
    history: {
        easy: [
            { question: "What was the name of the first successful English colony in North America?", options: ["Jamestown", "Plymouth", "Roanoke", "Williamsburg"], answer: "Jamestown" },
            { question: "Who was the first President of the United States?", options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"], answer: "George Washington" },
            { question: "In what year did the American Civil War begin?", options: ["1861", "1865", "1776", "1812"], answer: "1861" },
            { question: "What was the name of the famous English queen who ruled from 1558 to 1603?", options: ["Elizabeth I", "Victoria", "Mary I", "Anne"], answer: "Elizabeth I" },
            { question: "Which ancient civilization built the Great Pyramids of Giza?", options: ["Egyptians", "Greeks", "Romans", "Mayans"], answer: "Egyptians" },
            { question: "What was the name of the famous explorer who discovered the Americas in 1492?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Leif Erikson"], answer: "Christopher Columbus" },
            { question: "In what year did World War II end?", options: ["1945", "1939", "1941", "1918"], answer: "1945" },
            { question: "What was the name of the famous Chinese dynasty that built the Great Wall of China?", options: ["Qin", "Han", "Ming", "Tang"], answer: "Qin" },
            { question: "Who was the leader of the Soviet Union during World War II?", options: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Mikhail Gorbachev"], answer: "Joseph Stalin" },
            { question: "What was the name of the famous French queen who was executed during the French Revolution?", options: ["Marie Antoinette", "Catherine the Great", "Joan of Arc", "Eleanor of Aquitaine"], answer: "Marie Antoinette" }
        ],
        medium: [
            { question: "Which ancient civilization is known for its pyramids and hieroglyphic writing?", options: ["Mayans", "Egyptians", "Greeks", "Romans"], answer: "Egyptians" },
            { question: "Who was the first president of the United States?", options: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"], answer: "George Washington" },
            { question: "In which year did World War II end?", options: ["1945", "1939", "1941", "1943"], answer: "1945" },
            { question: "What was the name of the empire ruled by Genghis Khan?", options: ["Ottoman Empire", "Mongol Empire", "Persian Empire", "Roman Empire"], answer: "Mongol Empire" },
            { question: "Which ancient Greek philosopher is known for his teachings on logic and reason?", options: ["Socrates", "Plato", "Aristotle", "Archimedes"], answer: "Aristotle" },
            { question: "What was the name of the first successful English colony in North America?", options: ["Jamestown", "Plymouth", "Roanoke", "Williamsburg"], answer: "Jamestown" },
            { question: "Which event is considered the start of the French Revolution?", options: ["Storming of the Bastille", "Reign of Terror", "Execution of Louis XVI", "Napoleonic Wars"], answer: "Storming of the Bastille" },
            { question: "Who was the leader of the Soviet Union during World War II?", options: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Mikhail Gorbachev"], answer: "Joseph Stalin" },
            { question: "What was the name of the ancient city known for its hanging gardens?", options: ["Babylon", "Athens", "Sparta", "Carthage"], answer: "Babylon" },
            { question: "Which explorer is credited with being the first European to reach the Americas?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Leif Erikson"], answer: "Christopher Columbus" }
        ],
        hard: [
            { question: "What was the name of the famous treaty that ended the Thirty Years' War in 1648?", options: ["Treaty of Westphalia", "Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent"], answer: "Treaty of Westphalia" },
            { question: "Who was the leader of the French Revolution in the late 18th century?", options: ["Maximilien Robespierre", "Napoleon Bonaparte", "Louis XVI", "Marie Antoinette"], answer: "Maximilien Robespierre" },
            { question: "What was the name of the famous battle in 1066 that marked the Norman conquest of England?", options: ["Battle of Hastings", "Battle of Waterloo", "Battle of Agincourt", "Battle of Trafalgar"], answer: "Battle of Hastings" },
            { question: "Who was the leader of the Ottoman Empire during its peak in the 16th century?", options: ["Suleiman the Magnificent", "Mehmed II", "Selim I", "Murad IV"], answer: "Suleiman the Magnificent" },
            { question: "What was the name of the famous treaty that ended the American Revolutionary War in 1783?", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Westphalia", "Treaty of Ghent"], answer: "Treaty of Paris" },
            { question: "Who was the leader of the Chinese Communist Revolution in the 20th century?", options: ["Mao Zedong", "Deng Xiaoping", "Zhou Enlai", "Chiang Kai-shek"], answer: "Mao Zedong" },
            { question: "What was the name of the famous battle in 1815 that marked the final defeat of Napoleon?", options: ["Battle of Waterloo", "Battle of Hastings", "Battle of Agincourt", "Battle of Trafalgar"], answer: "Battle of Waterloo" },
            { question: "Who was the leader of the Indian independence movement against British rule in the early 20th century?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Subhas Chandra Bose"], answer: "Mahatma Gandhi" },
            { question: "What was the name of the policy of appeasement adopted by Britain and France towards Nazi Germany in the 1930s?", options: ["Munich Agreement", "Molotov-Ribbentrop Pact", "Anschluss", "Remilitarization of the Rhineland"], answer: "Munich Agreement" },
            { question: "Who was the leader of the Russian Revolution in 1917?", options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"], answer: "Vladimir Lenin" },
            { question: "What was the name of the policy of racial segregation in South Africa from 1948 to 1991?", options: ["Apartheid", "Bantu Homelands", "Pass Laws", "Group Areas Act"], answer: "Apartheid" },
            { question: "Who was the first European explorer to circumnavigate the globe?", options: ["Ferdinand Magellan", "Christopher Columbus", "Vasco da Gama", "Jacques Cartier"], answer: "Ferdinand Magellan" },
            { question: "What was the name of the famous speech given by Winston Churchill after the Battle of Britain in 1940?", options: ["We Shall Fight on the Beaches", "Their Finest Hour", "Blood, Toil, Tears and Sweat", "Iron Curtain Speech"], answer: "Their Finest Hour" },
            { question: "What was the name of the international group formed to maintain world peace after World War I?", options: ["United Nations", "League of Nations", "NATO", "Warsaw Pact"], answer: "League of Nations" },
            { question: "Who was the leader of the Cuban Revolution in 1959?", options: ["Fidel Castro", "Che Guevara", "Fulgencio Batista", "Hugo Chávez"], answer: "Fidel Castro" },
            { question: "What was the name of the famous treaty that ended World War I?", options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Westphalia", "Treaty of Ghent"], answer: "Treaty of Versailles" },
            { question: "Who was the first European explorer to reach the Pacific Ocean from the east coast of the Americas?", options: ["Vasco Núñez de Balboa", "Christopher Columbus", "Ferdinand Magellan", "Hernán Cortés"], answer: "Vasco Núñez de Balboa" },
            { question: "What was the name of the Ukrainian nuclear power plant that was the site of a nuclear disaster in April 1986?", options: ["Chernobyl", "Three Mile Island", "Fukushima Daiichi", "Mayak"], answer: "Chernobyl" }
        ]
    }
};



let selectedTopic;
let selectedDifficulty;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime;
let timerInterval;
let leaderboard = getCookie('leaderboard') ? JSON.parse(getCookie('leaderboard')) : {};



/**
 * Shuffles the elements of an array in place using the Fisher-Yates shuffle algorithm.
 *
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} The shuffled array.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Sets a cookie with a specified name, value, and expiration days.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {number} days - The number of days until the cookie expires.
 */
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

/**
 * Gets the value of a specified cookie by name.
 *
 * @param {string} name - The name of the cookie.
 * @returns {string} The value of the cookie.
 */
function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

/**
 * Formats a given time in seconds to a string in the format "MM:SS:mmm".
 *
 * @param {number} seconds - The time in seconds to be formatted.
 * @returns {string} The formatted time string.
 */
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
/**
 * Displays the difficulty options for the selected topic.
 *
 * @param {string} topic - The selected topic.
 */
function showDifficultyOptions(topic) {
    selectedTopic = topic;
    document.getElementById('topic-selection').style.display = 'none';
    document.getElementById('difficulty-selection').style.display = 'block';
}

/**
 * Starts the quiz with the selected topic and difficulty.
 *
 * @param {string} topic - The selected topic.
 * @param {string} difficulty - The selected difficulty.
 */
function startQuiz(topic, difficulty) {
    elapsedTime = 0;
    selectedDifficulty = difficulty;
    document.getElementById('leaderboard-section').style.display = 'none';
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('quiz-topic').innerText = `Quiz on ${topic.charAt(0).toUpperCase() + topic.slice(1)} (${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)})`;
    currentQuestionIndex = 0;
    userAnswers = [];
    loadQuestion();

    // Start the timer when the quiz starts
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 10);
}

/**
 * Updates the timer display and keeps track of the elapsed time.
 */
function updateTimer() {
    endTime = new Date();
    const formattedTime = formatTime((endTime - startTime) /1000);
    document.getElementById('quiz-timer').innerText = `Time: ${formattedTime}`;
}

/**
 * Loads the current question and displays it on the page.
 */
function loadQuestion() {
    const questionCounterDiv = document.getElementById('question-counter');
    questionCounterDiv.innerText = `Question ${currentQuestionIndex + 1} of ${questions[selectedTopic][selectedDifficulty].length}`;

    const quizQuestionDiv = document.getElementById('quiz-question');
    const question = questions[selectedTopic][selectedDifficulty][currentQuestionIndex];
    quizQuestionDiv.innerHTML = `
        <div class="question">
            <p>${question.question}</p>
            <div class="option-buttons">
                ${question.options.map((option, index) => `
                    <button onclick="selectAnswer('${option}')">${option}</button>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('next-question').style.display = 'none';

    try {
        document.getElementById('submit-quiz').style.display = 'none';

        if (currentQuestionIndex === questions[selectedTopic][selectedDifficulty].length - 1) {
            document.getElementById('submit-quiz').style.display = 'block';
        }
    } catch (error) {
        console.log("there was an error lol")
    }
}

/**
 * Handles the user's answer selection and updates the quiz state accordingly.
 *
 * @param {string} selectedOption - The selected answer option.
 */
function selectAnswer(selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[selectedTopic][selectedDifficulty].length) {
        loadQuestion();
    } else {
        submitQuiz();
    }
}

/**
 * Saves the quiz result to the leaderboard.
 *
 * @param {string} topic - The quiz topic.
 * @param {string} difficulty - The quiz difficulty.
 * @param {number} score - The quiz score.
 * @param {number} time - The time taken to complete the quiz.
 */
function saveToLeaderboard(topic, difficulty, score, time) {
    const key = `${topic}-${difficulty}`;
    if (!leaderboard[key] || leaderboard[key].score < score || (leaderboard[key].score === score && leaderboard[key].time > time)) {
        leaderboard[key] = { score, time };
        setCookie('leaderboard', JSON.stringify(leaderboard), 365);
    }
}

/**
 * Displays the leaderboard in the leaderboard section.
 */
function displayLeaderboard() {
    leaderboard = getCookie('leaderboard') ? JSON.parse(getCookie('leaderboard')) : {};
    const leaderboardDiv = document.getElementById('leaderboard');
    leaderboardDiv.innerHTML = '';

    if (Object.keys(leaderboard).length === 0) {
        document.getElementById('leaderboard-section').style.display = 'none';
        return;
    } else {
        document.getElementById('leaderboard-section').style.display = 'block';
    }

    const sortedLeaderboard = Object.keys(leaderboard).sort((a, b) => {
        const [aTopic, aDifficulty] = a.split('-');
        const [bTopic, bDifficulty] = b.split('-');
        if (leaderboard[a].score === leaderboard[b].score) {
            return leaderboard[a].time - leaderboard[b].time;
        }
        return leaderboard[b].score - leaderboard[a].score;
    });

    sortedLeaderboard.forEach(key => {
        const [topic, difficulty] = key.split('-');
        const { score, time } = leaderboard[key];
        leaderboardDiv.innerHTML += `
            <div class="leaderboard-item">
                <strong>${topic.charAt(0).toUpperCase() + topic.slice(1)} (${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)})</strong><br>
                Score: ${score}, Time: ${formatTime(time)}
            </div>
        `;
    });
}

// Initial call to display the leaderboard on page load
displayLeaderboard();


/**
 * Submits the quiz and displays the result section.
 */
function submitQuiz() {
    clearInterval(timerInterval); // Stop the timer when the quiz is submitted
    endTime = new Date();
    const timeTaken = formatTime((endTime - startTime) / 1000);

    let score = 0;
    const incorrectQuestions = [];
    questions[selectedTopic][selectedDifficulty].forEach((q, index) => {
        if (userAnswers[index] && userAnswers[index].toLowerCase() !== q.answer.toLowerCase()) {
            incorrectQuestions.push({
                question: q.question,
                chosenAnswer: userAnswers[index] || 'No answer provided',
                correctAnswer: q.answer
            });
        } else {
            score++;
        }
    });

    saveToLeaderboard(selectedTopic, selectedDifficulty, score, (endTime - startTime)/1000);

    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('correct-total').innerText = `Correct: ${score}/${questions[selectedTopic][selectedDifficulty].length}`;

    const timeTakenDisplay = document.getElementById('time-taken');
    timeTakenDisplay.innerText = `Time Taken: ${timeTaken}`;
    timeTakenDisplay.style.fontSize = '1.2em'; // Set font size for time taken display

    // Clear existing pagination and incorrect questions containers
    const oldPaginationContainer = document.querySelector('.pagination');
    const oldIncorrectQuestionsContainer = document.querySelector('.incorrect-questions');
    if (oldPaginationContainer) {
        oldPaginationContainer.remove();
    }
    if (oldIncorrectQuestionsContainer) {
        oldIncorrectQuestionsContainer.remove();
    }

    const incorrectQuestionsContainer = document.createElement('div');
    incorrectQuestionsContainer.classList.add('incorrect-questions');

    const pageSize = 3; // Number of incorrect questions per page
    const totalPages = Math.ceil(incorrectQuestions.length / pageSize);

    let currentPage = 1;

    function displayPage(page) {
        incorrectQuestionsContainer.innerHTML = ''; // Clear previous content
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const pageQuestions = incorrectQuestions.slice(start, end);

        pageQuestions.forEach((incorrect) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('incorrect-question');
            questionElement.innerHTML = `
                <p><strong>Question:</strong> ${incorrect.question}</p>
                <p><strong>Your Answer:</strong> ${incorrect.chosenAnswer}</p>
                <p><strong>Correct Answer:</strong> ${incorrect.correctAnswer}</p>
            `;
            incorrectQuestionsContainer.appendChild(questionElement);
        });
    }

    function goToPage(page) {
        if (page >= 1 && page <= totalPages) {
            currentPage = page;
            displayPage(currentPage);
            updatePaginationButtons();
        }
    }

    function updatePaginationButtons() {
        const paginationButtons = document.querySelectorAll('.pagination button');
        paginationButtons.forEach((button, index) => {
            if (index + 1 === currentPage) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    displayPage(currentPage);

    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.onclick = () => goToPage(i);
        paginationContainer.appendChild(pageButton);
    }

    document.getElementById('result-section').appendChild(incorrectQuestionsContainer);
    document.getElementById('result-section').appendChild(paginationContainer);
}

/**
 * Exits the quiz and returns to the topic selection screen.
 */
function exitQuiz() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('topic-selection').style.display = 'block';
}

/**
 * Restarts the quiz and returns to the topic selection screen.
 */
function restartQuiz() {
    document.getElementById('result-section').style.display = 'none';
    displayLeaderboard();
    document.getElementById('leaderboard-section').style.display = 'block';
    document.getElementById('topic-selection').style.display = 'block';
}




