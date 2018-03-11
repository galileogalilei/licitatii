<?php

namespace Licitatii\Bundle\LicitatiiBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/tst1",name="bouble_tst")
     * @return Response
     */
    public function indexAction(Request $request)
    {
        return $this->render('@Licitatii/Default/index.html.twig');
    }

    /**
     * @Route("/tst2",name="books_tst")
     * @return Response
     */
    public function booksAction(Request $request)
    {
        return $this->render('@Licitatii/Default/books.html.twig');
    }
}
