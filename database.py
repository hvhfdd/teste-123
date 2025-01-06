from flask import Flask, request, render_template_string

app = Flask(__name__)

mensagens = []

@app.route('/')
def home():
    return render_template_string(open('index.html').read(), mensagens=mensagens)

@app.route('/enviar-mensagem', methods=['POST'])
def enviar_mensagem():
    nome = request.form['nome']
    mensagem = request.form['mensagem']
    mensagens.append(f"{nome}: {mensagem}")
    return render_template_string(open('index.html').read(), mensagens=mensagens)

if __name__ == "__main__":
    app.run(debug=True)
