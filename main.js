const messages = [
        { type: 'incoming', text: 'Alors, on a un problème avec l’expédition… manuelle ?', sender: 'Bernard', icon: '🧔' , delay: 2200},
        { type: 'incoming', text: 'Hé hé, c’est plus rigolo qu’un tableau Excel en 1998, je te l’assure !', sender: 'Sophie', icon: '👩' , delay:3000},
        { type: 'incoming', text: 'On a un client qui insiste pour une expédition manuelle.', sender: 'Antoine', icon: '👨‍💻' , delay: 1000},
        { type: 'incoming', text: 'J’ai trouvé un document PDF de 1997...', sender: 'David', icon: '👨‍🔧' , delay: 2000},
        { type: 'incoming', text: 'Le tout en rose fluo.', sender: 'Chloé', icon: '👩‍🎨' , delay: 1000},
        { type: 'incoming', text: 'Ah, la bonne époque !  Avant que les emojis ne prennent le contrôle du monde.', sender: 'Bernard', icon: '🧔', delay: 3000},
        { type: 'incoming', text: 'On dirait un manuel d’instruction pour une fusée spatiale…  mais en moins clair.', sender: 'Sophie', icon: '👩', delay: 3000},
        { type: 'incoming', text: 'Il y a des schémas…  des schémas qui ressemblent à des œuvres d’art abstrait.', sender: 'Antoine', icon: '👨‍💻', delay: 3000},
        { type: 'incoming', text: 'Et des abréviations…  des abréviations qui défient toute logique humaine.', sender: 'Chloé', icon: '👩‍🎨', delay: 500},
        { type: 'incoming', text: 'Je crois avoir déchiffré une partie…  il faut remplir un formulaire papier.', sender: 'David', icon: '👨‍🔧', delay: 3000},
        { type: 'incoming', text: 'Papier ?  On est en 2025, les amis !', sender: 'Bernard', icon: '🧔', delay: 2000},
        { type: 'incoming', text: 'On dirait qu’on est retournés à l’âge de pierre numérique.', sender: 'Sophie', icon: '👩', delay: 2500},
        { type: 'incoming', text: 'Bon, on remplit le formulaire.  Qui a une imprimante fonctionnelle ?', sender:'Antoine', icon: '👨‍💻', delay: 3000},
        { type: 'incoming', text: 'J’ai une imprimante…  mais elle imprime en rose fluo.', sender:'Chloé', icon: '👩‍🎨'},
        { type: 'incoming', text: 'Parfait, ça ajoutera une touche d’originalité à notre expédition manuelle.', sender:'David', icon: '👨‍🔧', delay: 3000},
        { type: 'incoming', text: 'On va devenir des experts en archéologie informatique.', sender:'Bernard', icon: '🧔', delay: 2200},
        { type: 'incoming', text: 'Et on aura une histoire à raconter à nos petits-enfants.', sender:'Sophie', icon: '👩', delay: 2200},
        { type: 'incoming', text: 'Une histoire qui commence par « Il était une fois, un formulaire papier… »', sender:'Antoine', icon: '👨‍💻', delay: 3000},
        { type: 'incoming', text: 'et une expédition manuelle qui a failli nous rendre fous.', sender:'Chloé', icon: '👩‍🎨', delay: 2200},
        { type: 'incoming', text: 'Au moins, on aura appris quelque chose.', sender:'David', icon: '👨‍🔧', delay: 2000},
        { type: 'incoming', text: 'On aura appris à apprécier la simplicité d’un clic de souris.', sender:'Bernard', icon: '🧔', delay: 2500},
        { type: 'incoming', text: 'Et à déchiffrer des documents de 1997.', sender:'Sophie', icon: '👩', delay: 2000},
        { type: 'incoming', text: 'Le tout en rose fluo.', sender:'Antoine', icon: '👨‍💻', delay: 1200},
        { type: 'incoming', text: 'La vie est belle.', sender:'Chloé', icon: '👩‍🎨', delay: 1000},
        { type: 'incoming', text: 'Surtout quand elle est manuelle.', sender:'David', icon: '👨‍🔧', delay: 1500}
    ];

    let previousMessage;

// Affiche l'indicateur de frappe d'abord, attend, puis remplace par le message
function displayMessageWithTyping(index) {
    if (index >= messages.length) return; // S'assurer qu'il y a des messages à afficher

    const typingIndicator = document.getElementById('typingIndicator');
    
    // Afficher l'indicateur de frappe
    typingIndicator.style.opacity = '1';

    // Masquer l'indicateur de frappe après un délai (messages[index].delay) et afficher le message
    setTimeout(() => {
        typingIndicator.style.opacity = '0'; // Cacher l'indicateur

        setTimeout(() => {
            const message = messages[index];
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${message.type}`;

            const senderDiv = document.createElement('div');
            senderDiv.className = 'sender';
            const senderIcon = document.createElement('span');
            senderIcon.className = 'sender-icon';
            senderIcon.innerText = message.icon;

            senderDiv.appendChild(senderIcon);
            senderDiv.appendChild(document.createTextNode(message.sender));
            messageDiv.appendChild(senderDiv);

            const textNode = document.createTextNode(message.text);
            messageDiv.appendChild(textNode);

            const readStatusDiv = document.createElement('div');
            readStatusDiv.className = 'read-status unread';
            const readCheck = document.createElement('span');
            readCheck.className = 'read-check';
            readCheck.innerText = '✓✓';
            readStatusDiv.appendChild(readCheck);
            messageDiv.appendChild(readStatusDiv);

            document.getElementById('messageContainer').appendChild(messageDiv);

            setTimeout(() => {
                messageDiv.style.opacity = '1';
            }, 100);

            const messageContainer = document.getElementById('messageContainer');
            messageContainer.scrollTop = messageContainer.scrollHeight;

            if (previousMessage) {
                previousMessage.querySelector('.read-status').classList.replace('unread', 'read');
            }

            previousMessage = messageDiv;

            // Afficher le prochain message avec l'indicateur de frappe
            displayMessageWithTyping(index + 1);
        }, 500); // Délai léger après avoir caché l'indicateur pour afficher le message
    }, messages[index].delay); // Attendre le délai défini pour chaque message
}

// Lancement du premier message
displayMessageWithTyping(0);
