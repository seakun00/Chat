<html lang="ja">
    <body>
        <form action="/authenticate" method="post">
            <input type="hidden" name="_token" value="{{ csrf_token() }}" />
            <label>
                メールアドレス
                <input type="email" name="email">
            </label>
            <label>
                パスワード
                <input type="password" name="password">
            </label>
            <input type="submit" value="ログイン">
        </form>
    </body>
</html>
