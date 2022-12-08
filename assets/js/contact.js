$(function () {

    // form
    $('#form').validate({
        rules: {
            name_er: {
                required: true,
            },
            furigana_er: {
                required: true,
            },
            phone_er: {
                required: true,
                number: true
            },
            email_er: {
                required: true,
                email: true
            },
            content_er: {
                required: true,
            },
        },

        messages: {
            name_er: {
                required: '必須項目を入力してください。'
            },

            furigana_er: {
                required: '必須項目を入力してください。'
            },

            phone_er: {
                required: '必須項目を入力してください。',
                number: '半角数字で入力してください。'
            },

            email_er: {
                required: '必須項目を入力してください。',
                email: 'メールアドレスを入力してください。'
            },

            content_er: {
                required: '必須項目を入力してください。'
            }
        },
    });

});