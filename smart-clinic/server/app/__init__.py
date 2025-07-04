from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    # Register blueprint
    from .routes import bp
    app.register_blueprint(bp, url_prefix='/api')

    # ✅ Root route at /
    @app.route('/')
    def index():
        return jsonify({"message": "Smart Clinic API is running 🚀"})

    return app
