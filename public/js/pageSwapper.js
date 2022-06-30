
const landingLink = document.getElementById('landingLink');
const aboutLink = document.getElementById('aboutLink');
const guildsLink = document.getElementById('guildsLink');
const letsLearnButton = document.getElementById('letsLearn');

const aboutContent = document.getElementById('aboutContent');
const guildsContent = document.getElementById('guildsContent');
const landingContent = document.getElementById('landingContent')




landingLink.onclick = function(){
    // display landing
    landingContent.classList.remove('hidden');
    aboutContent.classList.add('hidden');
    guildsContent.classList.add('hidden');

    // activate link
    landingLink.classList.add('active');
    aboutLink.classList.remove('active');
    guildsLink.classList.remove('active');
    
}

aboutLink.onclick = function(){
    landingContent.classList.add('hidden');
    aboutContent.classList.remove('hidden');
    guildsContent.classList.add('hidden');

    // activate link
    landingLink.classList.remove('active');
    aboutLink.classList.add('active');
    guildsLink.classList.remove('active');
}

guildsLink.onclick = function(){
    landingContent.classList.add('hidden');
    aboutContent.classList.add('hidden');
    guildsContent.classList.remove('hidden');

    // activate link
    landingLink.classList.remove('active');
    aboutLink.classList.remove('active');
    guildsLink.classList.add('active');
}

letsLearnButton.onclick = function(){
    landingContent.classList.add('hidden');
    aboutContent.classList.add('hidden');
    guildsContent.classList.remove('hidden');

    // activate link
    landingLink.classList.remove('active');
    aboutLink.classList.remove('active');
    guildsLink.classList.add('active');
}

