# Configuration de l'environnement - Site YNot

Ce document décrit tous les prérequis et les étapes d'installation pour configurer l'environnement de développement du projet Symfony.

## 📋 Prérequis système

### Obligatoire
- **PHP** : >= 8.2
- **Composer** : Version récente (https://getcomposer.org/)
- **Git** : Pour le contrôle de version
- **Docker & Docker Compose** : Pour PostgreSQL (optionnel si base de données locale)

### Extensions PHP requises
- `ext-ctype` : Gestion des types de caractères
- `ext-iconv` : Conversion d'encodage de caractères

## 🚀 Installation rapide

### 1. Cloner le projet
```bash
git clone <repository-url>
cd Site-YNot
```

### 2. Installer les dépendances PHP
```bash
composer install
```

### 3. Configurer l'environnement
```bash
# Copier le fichier .env si nécessaire
cp .env.local.example .env.local  # (si le fichier existe)
```

Éditer `.env.local` et configurer les variables suivantes :
```env
APP_ENV=dev
APP_SECRET=your_secret_key_here
DATABASE_URL=postgresql://app:!ChangeMe!@localhost:5432/app
```

### 4. Initialiser la base de données

#### Option A : Avec Docker (recommandé)
```bash
# Démarrer les services Docker
docker-compose up -d

# Attendre que la base soit prête, puis
php bin/console doctrine:migrations:migrate
```

#### Option B : Avec PostgreSQL local
```bash
# Créer la base de données
php bin/console doctrine:database:create

# Appliquer les migrations
php bin/console doctrine:migrations:migrate
```

### 5. Démarrer l'application
```bash
# Mode développement avec serveur Symfony
symfony server:start

# OU classique PHP (http://localhost:8000)
php -S localhost:8000 -t public
```

L'application sera accessible à `http://localhost:8000`

## 📦 Dépendances principales

### Symfony 7.3
- `symfony/framework-bundle` - Core framework
- `symfony/console` - CLI commands
- `symfony/asset-mapper` - Asset management
- `symfony/twig-bundle` - Template engine
- `symfony/security-bundle` - Authentication & authorization
- `symfony/form` - Form handling
- `symfony/validator` - Data validation

### Base de données
- `doctrine/orm` - ORM (Object-Relational Mapping)
- `doctrine/doctrine-bundle` - Doctrine integration
- `doctrine/doctrine-migrations-bundle` - Database migrations
- `doctrine/dbal` - Database abstraction layer

### Frontend
- `symfony/stimulus-bundle` - JavaScript framework (Stimulus)
- `symfony/ux-turbo` - Turbo integration
- `twig/twig` - Template engine

### Autres
- `symfony/mailer` - Email sending
- `symfony/notifier` - Notifications
- `symfony/monolog-bundle` - Logging
- `phpunit/phpunit` (dev) - Unit testing

## 🔧 Configuration détaillée

### Variables d'environnement (.env.local)
```env
# Application
APP_ENV=dev                                  # dev, test, ou prod
APP_SECRET=your_secret_key                   # Clé secrète de l'application

# Database - PostgreSQL avec Docker
DATABASE_URL="postgresql://app:!ChangeMe!@database:5432/app"

# Database - PostgreSQL local
DATABASE_URL="postgresql://app:!ChangeMe!@localhost:5432/app"

# Mailer (optionnel)
MAILER_DSN=null://null

# Notifier (optionnel)
NOTIFIER_DSN=null://null
```

### Docker Compose
Le fichier `compose.yaml` configure PostgreSQL 16 Alpine. Les variables d'environnement disponibles sont :

```yaml
POSTGRES_VERSION: 16 (par défaut)
POSTGRES_DB: app (par défaut)
POSTGRES_USER: app (par défaut)
POSTGRES_PASSWORD: !ChangeMe! (par défaut)
```

## 📁 Structure du projet

```
Site-YNot/
├── assets/              # JavaScript, CSS, Stimulus controllers
├── bin/                 # Scripts exécutables (console, phpunit)
├── config/              # Configuration Symfony
├── migrations/          # Migrations de base de données Doctrine
├── public/              # Répertoire web (point d'entrée)
├── src/                 # Code source PHP
│   ├── Controller/      # Contrôleurs
│   ├── Entity/          # Entités Doctrine
│   └── Repository/      # Repositories Doctrine
├── templates/           # Templates Twig
├── tests/               # Tests PHPUnit
├── translations/        # Fichiers de traduction
├── composer.json        # Dépendances PHP
├── compose.yaml         # Configuration Docker Compose
└── .env                 # Variables d'environnement
```

## 🧪 Commandes utiles

### Développement
```bash
# Démarrer le serveur de développement
symfony server:start

# Arrêter le serveur
symfony server:stop

# Vider le cache
php bin/console cache:clear

# Regénérer les assets
php bin/console asset-map:compile

# Installer les importmap
php bin/console importmap:install
```

### Base de données
```bash
# Créer la base de données
php bin/console doctrine:database:create

# Créer une migration
php bin/console make:migration

# Exécuter les migrations
php bin/console doctrine:migrations:migrate

# Revenir à la migration précédente
php bin/console doctrine:migrations:migrate prev

# Afficher le statut des migrations
php bin/console doctrine:migrations:status
```

### Tests
```bash
# Exécuter tous les tests
php bin/phpunit

# Exécuter les tests d'un fichier spécifique
php bin/phpunit tests/Controller/SiteControllerTest.php

# Exécuter les tests avec couverture de code
php bin/phpunit --coverage-html=coverage
```

### Assets & Frontend
```bash
# Compiler les assets
php bin/console asset-map:compile

# Installer les dépendances importmap
php bin/console importmap:install

# Mode watch (pour le développement)
php bin/console asset-map:compile --watch
```

## 🐳 Docker Compose

### Démarrer les services
```bash
# Démarrer en arrière-plan
docker-compose up -d

# Arrêter les services
docker-compose down

# Afficher les logs
docker-compose logs -f database
```

### Accès à la base de données
```bash
# Se connecter à PostgreSQL
docker-compose exec database psql -U app -d app

# Vérifier l'état de santé
docker-compose ps
```

## ✅ Vérifier l'installation

```bash
# Vérifier la version de PHP
php --version

# Vérifier la configuration PHP
php -r "print_r(get_loaded_extensions());"

# Tester la connexion à la base de données
php bin/console doctrine:database:create --if-not-exists
php bin/console doctrine:migrations:migrate --no-interaction

# Afficher l'état de l'application
php bin/console about
```

## 🆘 Dépannage

### Erreur : "PHP 8.2+ required"
- Vérifiez votre version PHP : `php --version`
- Installez PHP 8.2+ depuis https://www.php.net/downloads

### Erreur : "Extension ext-ctype not found"
```bash
# Sur Ubuntu/Debian
sudo apt-get install php8.2-ctype

# Sur macOS avec Homebrew
brew install php@8.2
```

### Erreur de connexion à la base de données
```bash
# Vérifiez que Docker est en cours d'exécution
docker-compose ps

# Redémarrez les services
docker-compose restart database

# Attendez 60 secondes le démarrage de la base (healthcheck)
```

### Le cache n'est pas mis à jour
```bash
# Effacez complètement le cache
rm -rf var/cache/*
php bin/console cache:clear --force
```

### Permissions de fichiers (Linux/macOS)
```bash
# Corriger les permissions des répertoires
chmod -R 775 var/
chmod -R 775 public/uploads/  # Si applicable
```

## 📚 Documentation supplémentaire

- Symfony : https://symfony.com/doc/7.3/
- Doctrine ORM : https://www.doctrine-project.org/
- PostgreSQL : https://www.postgresql.org/docs/
- Stimulus : https://stimulus.hotwired.dev/
- Twig : https://twig.symfony.com/

## 👤 Support

Pour toute question ou problème, consultez la documentation Symfony ou contactez l'équipe de développement.

---

**Dernière mise à jour** : Janvier 2026
