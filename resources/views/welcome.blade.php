<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csr-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link rel="stylesheet" href="/css/bootstrap.css" media="screen" />
        <link rel="stylesheet" href="/css/icoMoon.css" media="all" />
        <link rel="stylesheet" href="/css/superfish.css" media="screen" />
        <link rel="stylesheet" href="/css/prettyPhoto.css" media="screen" />
        <link rel="stylesheet" href="/css/flexslider.css" media="screen" />
        <link rel="stylesheet" href="/css/theme-options.css" media="screen" />
        <link rel="stylesheet" href="/css/style.css">        
        <link rel="stylesheet" href="/css/bootstrap-responsive.css" media="all">
        <link href="/css/responsive.css" rel="stylesheet">
    	<link rel="stylesheet" href="/css/colors/default.css" type="text/css" id="colors" />

        <!-- Le fav and touch icons -->
        <link rel="shortcut icon" href="/img/favicon.html">
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-touch-icon-114x114.png">
      

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
    </head>
    <body>
    <div class="container">
        <div id="app"></div>
    </div>
    <script src="{{asset('js/index.js')}}"></script>

    </body>
</html>
