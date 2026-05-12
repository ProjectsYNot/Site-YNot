<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class SiteController extends AbstractController
{
    #[Route('/', name: 'site_index')]
    public function index(): Response
    {
        return $this->render('site/index.html.twig');
    }

    #[Route('/notre-equipe', name: 'site_team')]
    public function team(): Response
    {
        return $this->render('site/team.html.twig');
    }

    #[Route('/beta', name: 'site_beta')]
    public function beta(): Response
    {
        return $this->render('site/beta.html.twig');
    }
}
