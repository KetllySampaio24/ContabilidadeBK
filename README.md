# 📊 BK Contabilidade

Site institucional desenvolvido para contadores, MEIs e microempresas, com design moderno e funcionalidade de consulta de CNPJ integrada via API.

🔗 Acesse: [https://ketllysampaio24.github.io/ContabilidadeBK/](https://ketllysampaio24.github.io/ContabilidadeBK/)

---

## 🚀 Tecnologias

- HTML5, CSS3, JavaScript
- Python + Flask (consulta de CNPJ via ReceitaWS)
- FormSubmit (formulário de contato)
- GitHub Pages (frontend hospedado)

---

## ✨ Funcionalidades

- Navegação entre páginas: Home, Quem Somos, Serviços, Fale Conosco
- Consulta de CNPJ (backend local em Flask)
- Formulário de contato funcional
- Botões de contato com WhatsApp e Instagram

---

## ⚠️ Observação

A consulta de CNPJ funciona **somente com o backend local** rodando via Flask, pois o GitHub Pages não suporta backends.

---

## 🖥️ Como rodar o backend local

```bash
# Acesse a pasta backend
cd ContabilidadeBK/consulta_cnpj

# Crie ambiente virtual (opcional)
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

# Instale dependências e execute
pip install -r requirements.txt
python app.py
