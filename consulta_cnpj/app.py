from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Permite chamadas de outros domínios (ex: seu frontend HTML)

@app.route('/consultar_cnpj', methods=['GET'])
def consultar_cnpj():
    cnpj = request.args.get('cnpj')
    if not cnpj:
        return jsonify({"erro": "CNPJ não informado"}), 400

    # Remove caracteres especiais
    cnpj = ''.join(filter(str.isdigit, cnpj))

    try:
        url = f"https://receitaws.com.br/v1/cnpj/{cnpj}"
        response = requests.get(url)
        if response.status_code == 200:
            return jsonify(response.json())
        else:
            return jsonify({"erro": "Erro ao consultar o CNPJ"}), response.status_code
    except Exception as e:
        return jsonify({"erro": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
