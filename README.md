# Ynot — site vitrine

Site statique Symfony/Twig pour présenter **Ynot** (landing, équipe, annonce beta).

## Stack

PHP **8.2+**, Symfony **7.3**, Twig, CSS / JS (`public/style.css`, `public/ynot.js`).

## Démarrage

```bash
composer install
symfony server:start
```

Ouvre [http://127.0.0.1:8000](http://127.0.0.1:8000).

### Accès depuis le réseau local (Wi‑Fi / LAN)

Par défaut le serveur n’écoute que sur **localhost**. Pour que téléphone / autre PC sur le **même réseau privé** y accèdent :

**Avec la CLI Symfony** (recommandé) :

```bash
symfony server:start --allow-all-ip
# ou
composer serve:lan
```

**Sans Symfony** (serveur PHP intégré, écoute sur toutes les interfaces) :

```bash
php -S 0.0.0.0:8000 -t public
```

Ensuite, sur l’autre appareil, ouvre `http://<IP-de-ton-Mac>:8000` (ex. `http://192.168.1.42:8000`).  
Adresse locale du Mac : **Réglages Système → Réseau → Wi‑Fi → Détails… → Adresse IP**, ou en terminal : `ipconfig getifaddr en0` (souvent Wi‑Fi ; sinon `en1`).

Si la connexion est refusée : vérifie le **pare-feu macOS** (autoriser PHP ou le binaire Symfony pour les connexions entrantes). Ne pas exposer ce mode sur un réseau public : **développement uniquement**.

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Accueil |
| `/notre-equipe` | Équipe |
| `/beta` | Message « beta à venir » (liens « Télécharger l’app ») |

Assets dans `public/` · templates dans `templates/site/`.
