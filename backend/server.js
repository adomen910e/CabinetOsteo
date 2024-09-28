const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Importer Axios

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour la racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur le serveur !');
});

// Route pour envoyer un email
app.post('/send-email', async (req, res) => {
    console.log('Requête reçue:', req.body);
    const { firstName, lastName, phone, email, message, animal } = req.body; // Extraire les champs du corps de la requête

    const templateParams = {
        from_name: `${firstName} ${lastName}`,
        to_name: 'Destinataire', // Remplacez par le nom du destinataire
        phone: phone,
        from_email: email,
        message: message,
        animal: animal,
    };

    try {
        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: 'service_hnfanms', // Remplacez par votre Service ID
            template_id: 'template_v5xgsoj', // Remplacez par votre Template ID
            user_id: 'G6ZFZy3tu0QbPaFQP', // Remplacez par votre User ID
            template_params: templateParams,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Email envoyé:', response.data);
        res.status(200).send({ message: 'Email envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        res.status(500).send({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});