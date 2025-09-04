module.exports = {
    assunto: "Obrigado pela sua doação 💜",

    texto: `Olá, {{nome}}! 

Recebemos a sua doação no valor de R$ {{valor}} e queremos agradecer de coração pelo seu apoio. 

A sua contribuição faz toda a diferença e nos ajuda a continuar com este projeto. 

Muito obrigado(a) pela confiança e solidariedade!

Atenciosamente,
Equipe do Sistema de Doações`,

    html: `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obrigado pela sua doação 💜</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #6a11cb;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #6a11cb;
            margin: 0;
        }
        .content {
            font-size: 16px;
            line-height: 1.8;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
        .highlight {
            color: #2575fc;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>💜 Obrigado pela sua doação!</h1>
        </div>
        
        <div class="content">
            <p>Olá, <span class="highlight">{{nome}}</span>!</p>
            
            <p>Recebemos a sua doação no valor de <strong>R$ {{valor}}</strong> e queremos agradecer de coração pelo seu apoio.</p>
            
            <p>A sua contribuição faz toda a diferença e nos ajuda a continuar com este projeto.</p>
            
            <p>Muito obrigado(a) pela confiança e solidariedade!</p>
            
            <p>Atenciosamente,<br>
            <strong>Equipe do Sistema de Doações</strong></p>
        </div>
        
        <div class="footer">
            <p>Este é um email automático, por favor não responda.</p>
            <p>© 2025 Sistema de Doações</p>
        </div>
    </div>
</body>
</html>`
};
