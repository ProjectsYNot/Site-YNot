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

Sans CLI Symfony : `php -S 127.0.0.1:8000 -t public`

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Accueil |
| `/notre-equipe` | Équipe |
| `/beta` | Message « beta à venir » (liens « Télécharger l’app ») |

Assets dans `public/` · templates dans `templates/site/`.
