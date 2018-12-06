from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager

from cat_mash import app, db
from cat_mash.models import *
from cat_mash.api import *
from commands import FixturesCommand

migrate = Migrate(app, db)
manager = Manager(app)


manager.add_command('db', MigrateCommand)
manager.add_command('fixtures', FixturesCommand)


if __name__ == '__main__':
    manager.run()
