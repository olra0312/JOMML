const { Model } = require('objection');
const Advertisement = require('./Advertisement.js');


class User extends Model {
    static tableName = 'users';
    
    static relationMappings = {
        advertisements: {
            relation: Model.HasManyRelation,
            modelClass: Advertisement,
            join: {
              from: 'users.id',
              to: 'advertisements.userId'
            }
        }
    }
}

module.exports = User;