import sqlite3
import os

class UseDB:
    """Class to use sqlite database"""
    def __init__(self, db_path):
        self.db_path = os.path.join(os.getcwd(), db_path)
    
    def __enter__(self):
        try:
            self.conn = sqlite3.connect(self.db_path)
            self.cursor = self.conn.cursor()
            return self.cursor
        except sqlite3.Error as err:
            raise err
    
    def __exit__(self, exc_type, exc_value, exc_trace):
        self.conn.commit()
        self.cursor.close()
        self.conn.close()

        if exc_type:
            raise exc_type(exc_value)