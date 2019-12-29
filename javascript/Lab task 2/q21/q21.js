var languageCode = prompt("Select anyone language code (es,de,en)");
if(languageCode=="ES" || languageCode=="es")
{
    alert("Hola Mundo!");
}
else if(languageCode=="DE" || languageCode=="de")
{
    alert("Hallo Welt");
}
else if(languageCode=="EN" || languageCode=="en")
{
    alert("Hello, World");
}
else{
    alert("Invalid selection");
}