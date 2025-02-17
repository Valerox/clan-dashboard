from flask import Flask, jsonify
import requests
from flask_cors import CORS
app = Flask(__name__)

app.config.from_object(__name__)

CORS(app, resources={r'/*': {'origins': '*'}})

# Clash of Clans API Key
API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImE1YzA4ZTkxLTQzM2ItNGZjMy1hMjdlLTlmNzdlYjZlZmI2OSIsImlhdCI6MTczNzQ5NTgxMiwic3ViIjoiZGV2ZWxvcGVyL2U1NjM1MGFiLTU0Y2EtZTYxZi02NDY1LWMwYTMyZDQ2OTJhNyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjg0LjE3MC4xMTMuNTkiXSwidHlwZSI6ImNsaWVudCJ9XX0.fSG67z3RMjpCnfsJ5jvXcXyUvI9SxSjR_I7a47xsBWRp-r2wMM-1JRy4eZoHQAkbKwBi9OoWdn1OVkp31w_Row"

@app.route('/clan/<clan_tag>', methods=['GET'])
def get_clan_details(clan_tag):
    # Bereinige das Clan-Tag
    clan_tag = clan_tag.replace("#", "%23")
    url = f"https://api.clashofclans.com/v1/clans/{clan_tag}"

    headers = {
        "Authorization": f"Bearer {API_KEY}"
    }

    try:
        # Anfrage an die Clash of Clans API
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Fehler auslösen, falls Statuscode nicht 2xx
        return jsonify(response.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/clan/<clan_tag>/lastwars', methods=['GET'])
def get_clan_warlogs(clan_tag):
    # Bereinige das Clan-Tag
    clan_tag = clan_tag.replace("#", "%23")
    url = f"https://api.clashofclans.com/v1/clans/{clan_tag}/warlog"

    headers = {
        "Authorization": f"Bearer {API_KEY}"
    }

    try:
        # Anfrage an die Clash of Clans API
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Fehler auslösen, falls Statuscode nicht 2xx
        return jsonify(response.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/clan/<clan_tag>/currentwar', methods=['GET'])
def get_current_war(clan_tag):
    # Bereinige das Clan-Tag
    clan_tag = clan_tag.replace("#", "%23")
    url = f"https://api.clashofclans.com/v1/clans/{clan_tag}/currentwar"

    headers = {
        "Authorization": f"Bearer {API_KEY}"
    }

    try:
        # Anfrage an die Clash of Clans API
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Fehler auslösen, falls Statuscode nicht 2xx
        return jsonify(response.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/')
def hello_world():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)