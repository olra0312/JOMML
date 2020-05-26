const { Model } = require('objection');

class Advertisement extends Model {
    static tableName = 'advertisements';
    
}

module.exports = Advertisement;