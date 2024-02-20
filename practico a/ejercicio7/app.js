let frases = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    " in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    "Excepteur sint occaecat cupidatat non proident",
    "sunt in culpa qui officia deserunt mollit anim id est laborum"
];

function frasealAzar() {
    let indice = Math.floor(Math.random() * frases.length); 
    return frases[indice];
}