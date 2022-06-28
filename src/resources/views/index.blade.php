<html lang="ja">
    <head>
        <title>Chat App</title>
        <script src="{{ asset('/js/index.js') }}" defer></script>
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
